# resume-builder

This is a Next.js project. Quick steps to run locally:

1. Copy the example env file and fill in values:

```bash
cp .env.local.example .env.local
# edit .env.local and paste your Clerk/Stripe/Database keys
```

2. Install and run the dev server:

```bash
npm install
npm run dev
```

3. Open http://localhost:3000

Important: Clerk authentication requires the following environment variables in `.env.local`:

- `CLERK_SECRET_KEY` (server secret key)
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (client publishable key)

Get Clerk keys at https://dashboard.clerk.com -> API keys. If you see "Missing publishableKey" in the browser, set the publishable key in `.env.local` and restart the dev server.

The repo includes `.env.local.example` with placeholder values.

## Features

- AI-powered resume generation
- Multiple resume templates
- Real-time preview
- User authentication with Clerk
- Premium subscription with Stripe
- Export to PDF

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Prisma ORM
- Clerk Authentication
- Stripe Payments
- OpenAI API
