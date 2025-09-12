## Project Overview

This is a Next.js starter template for building modern, full-stack web applications. It's an opinionated, production-ready boilerplate that includes Next.js 14, Shadcn/ui, TypeScript, Prisma, Auth.js (Next-Auth), and Tailwind CSS. The project emphasizes extreme type safety, a clear architectural separation of concerns, and an optimal developer experience.

The tech stack includes:
- **Core Framework:** Next.js 14+ (App Router)
- **UI Library:** React 18+
- **Styling:** Tailwind CSS
- **Component Toolkit:** shadcn/ui
- **Server State:** TanStack Query (React Query) v5
- **Client State:** Zustand
- **Forms:** React Hook Form
- **Validation:** Zod
- **Authentication:** Auth.js (Next-Auth) v5
- **Database ORM:** Prisma
- **Testing:** Vitest + React Testing Library
- **Code Quality:** ESLint, Prettier, Husky

## Building and Running

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18.17 or later)
- [pnpm](https://pnpm.io/installation)

### Installation and Development

1.  **Install dependencies:**
    ```bash
    pnpm install
    ```

2.  **Set up environment variables:**
    Copy the example environment file and add your database connection string, a secret for NextAuth, and your GitHub OAuth credentials:
    ```bash
    cp .env.example .env
    ```
    In the `.env` file, add the following:
    ```
    DATABASE_URL="postgresql://USER:PASSWORD@HOST:PORT/DATABASE"
    NEXTAUTH_SECRET="your-secret-here"
    GITHUB_ID="your-github-id"
    GITHUB_SECRET="your-github-secret"
    ```

3.  **Sync the database:**
    ```bash
    pnpm prisma db push
    ```

4.  **Run the development server:**
    ```bash
    pnpm run dev
    ```

### Building for Production

1.  **Build the application:**
    ```bash
    pnpm run build
    ```

2.  **Start the production server:**
    ```bash
    pnpm run start
    ```

### Testing and Linting

- **Run tests:**
  ```bash
  pnpm test
  ```

- **Lint the code:**
  ```bash
  pnpm run lint
  ```

## Development Conventions

- **Package Manager:** The project uses `pnpm` for package management.
- **Code Quality:** Code quality is enforced with ESLint, Prettier, Husky, and lint-staged.
- **Project Structure:** The project follows a structured directory layout to separate concerns:
    - `src/app`: Next.js App Router (Routing & UI)
    - `src/components`: General-purpose UI components
    - `src/lib`: Core project logic & services
    - `src/middleware.ts`: Next.js middleware (for route protection)
- **Data Fetching:**
    - **Server Components:** Prioritize fetching data in Server Components via `async/await`.
    - **Client Components:** Use TanStack Query (`useQuery`) for client-side data fetching.
    - **Data Mutation:** Use Server Actions for all CUD (Create, Update, Delete) operations.
- **State Management:**
    - **Server State:** Managed with URL Search Params and TanStack Query.
    - **Client State:** Managed with Zustand for global UI state.
- **Forms:** Handled with React Hook Form, Zod for validation, and Server Actions for submission.
- **Authentication:** Authentication is handled by Auth.js (Next-Auth). The configuration is in `src/lib/auth.ts`.
