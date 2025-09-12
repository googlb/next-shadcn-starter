"use server";

import { db } from "@/lib/db";
import { hash } from "bcryptjs";
import { randomBytes } from "crypto";
import { z } from "zod";

// Schema for password reset request
const resetRequestSchema = z.object({
  email: z.string().email("Invalid email address"),
});

// Schema for password reset confirmation
const resetConfirmSchema = z.object({
  token: z.string().min(1, "Token is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

export async function requestPasswordReset(formData: FormData) {
  try {
    const email = formData.get("email") as string;
    
    // Validate input
    const result = resetRequestSchema.safeParse({ email });
    if (!result.success) {
      return {
        error: result.error.issues[0].message,
      };
    }

    // Check if user exists
    const user = await db.user.findUnique({
      where: { email: result.data.email },
    });

    // Always return success to prevent email enumeration
    // But only send email if user exists
    if (user) {
      // Generate reset token
      const resetToken = randomBytes(32).toString("hex");
      const resetExpires = new Date(Date.now() + 3600000); // 1 hour

      // Save token to database
      await db.user.update({
        where: { id: user.id },
        data: {
          passwordResetToken: resetToken,
          passwordResetExpires: resetExpires,
        },
      });

      // Send password reset email
      const resetUrl = `${process.env.NEXTAUTH_URL || 'http://localhost:3000'}/reset-password?token=${resetToken}`;
      
      // Import email functions dynamically to avoid issues
      const { sendEmail, generatePasswordResetEmail } = await import("@/lib/email");
      const emailContent = generatePasswordResetEmail(resetUrl, user.name || undefined);
      
      await sendEmail({
        to: user.email,
        ...emailContent,
      });
    }

    return {
      success: "If an account with that email exists, we've sent a password reset link.",
    };
  } catch (error) {
    console.error("Password reset request error:", error);
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}

export async function resetPassword(formData: FormData) {
  try {
    const token = formData.get("token") as string;
    const password = formData.get("password") as string;

    // Validate input
    const result = resetConfirmSchema.safeParse({ token, password });
    if (!result.success) {
      return {
        error: result.error.issues[0].message,
      };
    }

    // Find user with valid reset token
    const user = await db.user.findFirst({
      where: {
        passwordResetToken: result.data.token,
        passwordResetExpires: {
          gt: new Date(),
        },
      },
    });

    if (!user) {
      return {
        error: "Invalid or expired reset token.",
      };
    }

    // Hash new password
    const hashedPassword = await hash(result.data.password, 12);

    // Update user password and clear reset token
    await db.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        passwordResetToken: null,
        passwordResetExpires: null,
      },
    });

    return {
      success: "Password has been reset successfully. You can now sign in with your new password.",
    };
  } catch (error) {
    console.error("Password reset error:", error);
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}