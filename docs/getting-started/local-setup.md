---
title: Local setup
sidebar_position: 4
description: Run the API, worker, portal and admin portal on your machine.
---

# Local setup

All three repos live side by side, for example `~/projects/nextcybr-{server,portal,admin-portal}`. Each uses Node **22** (see `.nvmrc` / `engines`) and npm.

## Prerequisites

- Node.js `>= 22.12` and npm `>= 10`
- PostgreSQL 14+ running locally
- The [Doppler CLI](https://docs.doppler.com/docs/install-cli), logged in (`doppler login`). Ask the team for access.
- Optional: Redis/Valkey 6+. The local Doppler config points at shared dev infrastructure, so usually only Postgres has to be local.

## 1. Server

```bash
cd nextcybr-server
npm install
doppler setup            # links this directory to the server's Doppler project (see doppler.yaml)
npx prisma generate
npx prisma migrate dev   # applies prisma/migrations to your local DATABASE_URL
npx prisma db seed       # base seed (prisma/seed.js)
node prisma/seedEntitlementSystem.js   # plans, feature definitions, default limits
npm run dev              # predev writes .env from Doppler, then nodemon server.js
```

In a second terminal, run the queue worker. Without it, emails and scheduled sweeps are queued but never processed:

```bash
npm run worker
```

To avoid the second process, set `ENABLE_INLINE_WORKERS=true` and `app.js` runs both workers inside the dev server.

:::caution Seeds
`seedEntitlementSystem.js` is idempotent (upserts) and must never be replaced by a wipe-and-recreate. `Plan` rows are referenced by every subscription. Optional seeds: `seedTestAccounts.js` (QA accounts on each tier), `seedMentorTestData.js`, and the `seed*PlanCopy.js` marketing-copy seeds.
:::

## 2. Portal

```bash
cd nextcybr-portal
npm install
cp .env.example .env.local   # or pull from the portal's Doppler project
npm run dev                  # next dev --turbopack on :3000
```

Key variables: `NEXT_PUBLIC_API_URL` (browser API base: `/api/v1/client` in production, where nginx serves the API on the same origin; locally, point it at your API, e.g. `http://localhost:<PORT>/api/v1/client`), `BACKEND_API_URL` (absolute URL for server-side fetches), `NEXT_PUBLIC_SOCKET_API_URL`, `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`, `NEXT_PUBLIC_GOOGLE_CLIENT_ID`, and the LinkedIn client and redirect. `NEXT_PUBLIC_SHOW_COMING_SOON_PAGE` / `NEXT_PUBLIC_COMING_SOON_HOSTS` switch on the coming-soon gate.

## 3. Admin portal

```bash
cd nextcybr-admin-portal
npm install
cp .env.example .env         # VITE_API_BASE_URL, VITE_CLOUDFRONT_URL
npm run dev                  # vite --host
```

Admin accounts are separate from portal users. Ask an existing admin to provision one, then sign in at `/signin`.

## 4. Checks before you push

| Repo | Command |
| --- | --- |
| server | `npm run format:check && npm test` |
| portal | `npm run check && npm test` (Prettier + ESLint, Vitest) |
| admin | `npm run format:check && npm run lint && npm test` |

These mirror the CI jobs. See [Testing & quality](/operations/testing).

## Useful URLs (local)

| What | URL |
| --- | --- |
| API root / health | `http://localhost:<PORT>/` · `/health` |
| Portal | `http://localhost:3000` |
| Admin portal | Printed by Vite (default `http://localhost:5173`) |
| Prisma Studio | `npx prisma studio` |
