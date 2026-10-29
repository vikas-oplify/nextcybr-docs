---
title: Environments & secrets
sidebar_position: 1
description: How secrets are managed, and every environment variable each app reads.
---

# Environments & secrets

Secrets are managed in **Doppler**. Nobody hand-edits `.env` files: they're generated from Doppler at dev start or deploy time. Each repo's `.env.example` lists the keys for reference.

## Where secrets come from

Each app has its own Doppler project. The server pulls its secrets on the VPS during deploy and locally through `npm run dev` (`predev`). The portal and admin portal pull theirs in the GitHub Actions build step. Ask the team for access.

:::note URLs
In production, `CLIENT_URL` is `dev.nextcybr.ai` and `PORTAL_URL` is unset. Email templates link to `nextcybr.ai` on purpose.
:::

## Server variables

| Group | Variables |
| --- | --- |
| Runtime | `ENVIRONMENT`, `NODE_ENV`, `PORT`, `LOG_ENV`, `ENABLE_INLINE_WORKERS`, `RATE_LIMIT_WINDOW_MS`, `RATE_LIMIT_MAX` |
| URLs / CORS | `CLIENT_URL`, `CLIENT_NAME`, `ADMIN_URL`, `PORTAL_URL`, `CDN_URL`, `API_PUBLIC_URL` |
| Auth | `ACCESS_TOKEN_SECRET`, `REFRESH_TOKEN_SECRET`, `PORTAL_ACCESS_PASSWORD`, `GOOGLE_CLIENT_ID`, `LINKEDIN_CLIENT_ID`, `LINKEDIN_CLIENT_SECRET`, `LINKEDIN_REDIRECT_URI` |
| Data | `DATABASE_URL`, `REDIS_URL` or `REDIS_HOST` / `REDIS_PORT` / `REDIS_USERNAME` / `REDIS_PASSWORD`, `REDIS_TLS` |
| Storage | `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_S3_BUCKET`, `SWEEP_SECRET`, `PUBLIC_KEY_IMAGEKIT`, `PRIVATE_KEY_IMAGEKIT`, `ENDPOINT_IMAGEKIT` |
| AI | `OPENAI_API_KEY`, `OPENAI_MODEL`, `OPENAI_MAX_TOKENS`, `GEMINI_*`, `BEDROCK_*`, `OPENROUTER_API_KEY` |
| Video | `AGORA_APP_ID`, `AGORA_APP_CERTIFICATE` |
| Email | `SUPPORT_EMAIL`, `ADMIN_ALERT_EMAIL`, `USE_TITAN_EMAIL_SERVICE`, `TITAN_EMAIL_USER`, `TITAN_EMAIL_PASS`, `NODE_MAILER_EMAIL_ADDRESS`, `NODE_MAILER_PASSWORD` |
| Stripe | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `STRIPE_WEBHOOK_SECRET_TWO`, `STRIPE_CONNECT_WEBHOOK_SECRET`, `STRIPE_PRICE_{STUDENT,COMPANY,MENTOR}_{tier}_{MONTHLY,YEARLY}` |
| Marketplace | `PLATFORM_FEE_RATE` (fallback, default 0.15), `PAYOUT_HOLD_DAYS` (7), `PENDING_HOLD_MINUTES` (15) |
| Seeding | `SEED_TEST_ACCOUNTS` |

## Portal variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_ENVIRONMENT` | Environment label |
| `NEXT_PUBLIC_API_URL` | Browser API base (`/api/v1/client`). The build fails if it still points at the removed `/api/proxy`. |
| `BACKEND_API_URL` | Absolute API URL for server-side fetches |
| `NEXT_PUBLIC_SOCKET_API_URL` | Socket.io endpoint |
| `NEXT_PUBLIC_SHOW_COMING_SOON_PAGE`, `NEXT_PUBLIC_COMING_SOON_HOSTS` | Coming-soon gate |
| `NEXT_PUBLIC_GOOGLE_CLIENT_ID`, `NEXT_PUBLIC_LINKEDIN_CLIENT_ID`, `NEXT_PUBLIC_LINKEDIN_REDIRECT_URI` | OAuth |
| `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` | Stripe Elements |
| `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY` | Location autocomplete |

## Admin portal variables

| Variable | Purpose |
| --- | --- |
| `VITE_API_BASE_URL` | Admin API base (`…/api/v1/admin`) |
| `VITE_CLOUDFRONT_URL` | Media CDN base for previews |
