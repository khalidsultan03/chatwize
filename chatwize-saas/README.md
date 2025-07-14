# ChatWize SaaS

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

WhatsApp Leads, Automated. Smarter sales with ChatWize—launch in minutes.

## Features
- Next.js 14 (App Router, TypeScript, TailwindCSS, shadcn/ui)
- Supabase (Postgres, RLS)
- ManyChat WhatsApp Cloud API integration
- Stripe Checkout (Free / Growth / Commerce+ plans)
- React Server Components + SWR
- Apple-inspired UI/UX (Inter font, accent, cards, micro-interactions)
- CI/CD: Vercel + GitHub

## Pages
- `/` Landing page (hero, features, pricing, FAQ)
- `/signup` Magic-link sign-up
- `/app/onboarding` 3-step wizard (ManyChat connect, template, launch)
- `/app/home` Dashboard (stats, chart)
- `/app/leads` DataTable + CSV export
- `/app/templates` Installed list + add modal
- `/app/settings` Profile, API token, AI follow-ups
- `/app/billing` Stripe portal
- `/app/help` Docs + chat widget

## Getting Started
1. Clone the repo
2. Copy `.env.example` to `.env.local` and fill in your keys
3. Run `npm install`
4. Run `npx supabase db push` (or deploy migrations)
5. `npm run dev` to start locally

## Environment Variables
See `.env.example` for:
- SUPABASE_URL, SUPABASE_ANON_KEY, SUPABASE_SERVICE_ROLE_KEY
- STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, STRIPE_PRICE_ID_*
- MANYCHAT_API_TOKEN, MANYCHAT_PAGE_ID
- NEXT_PUBLIC_SITE_URL

## Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

---
Built with ❤️ by Grok-4 and you.
