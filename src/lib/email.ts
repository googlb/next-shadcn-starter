// Email service integration
// This is a basic implementation - in production, use services like:
// - Resend (recommended for Next.js)
// - SendGrid
// - AWS SES
// - Nodemailer with SMTP

interface EmailOptions {
  to: string;
  subject: string;
  html: string;
}

export async function sendEmail({ to, subject, html }: EmailOptions) {
  // For development, we'll just log the email
  // In production, replace this with actual email service
  
  if (process.env.NODE_ENV === "development") {
    console.log("📧 Email would be sent:");
    console.log(`To: ${to}`);
    console.log(`Subject: ${subject}`);
    console.log(`HTML: ${html}`);
    return { success: true };
  }

  // Production email sending would go here
  // Example with Resend:
  /*
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: process.env.FROM_EMAIL || "noreply@yourapp.com",
      to,
      subject,
      html,
    });
    
    return { success: true };
  } catch (error) {
    console.error("Email sending failed:", error);
    return { success: false, error };
  }
  */
  
  return { success: true };
}

export function generatePasswordResetEmail(resetUrl: string, userName?: string) {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Password Reset</title>
      </head>
      <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: #f8f9fa; padding: 30px; border-radius: 10px; text-align: center;">
          <h1 style="color: #2563eb; margin-bottom: 30px;">Password Reset Request</h1>
          
          ${userName ? `<p>Hello ${userName},</p>` : '<p>Hello,</p>'}
          
          <p style="margin-bottom: 30px;">
            We received a request to reset your password. Click the button below to create a new password:
          </p>
          
          <a href="${resetUrl}" 
             style="display: inline-block; background: #2563eb; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; margin: 20px 0;">
            Reset Password
          </a>
          
          <p style="margin-top: 30px; font-size: 14px; color: #666;">
            This link will expire in 1 hour for security reasons.
          </p>
          
          <p style="font-size: 14px; color: #666;">
            If you didn't request this password reset, you can safely ignore this email.
          </p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #ddd;">
          
          <p style="font-size: 12px; color: #999;">
            If the button doesn't work, copy and paste this link into your browser:<br>
            <span style="word-break: break-all;">${resetUrl}</span>
          </p>
        </div>
      </body>
    </html>
  `;

  return {
    subject: "Reset Your Password",
    html,
  };
}