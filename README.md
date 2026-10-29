# NextCybr Docs

Product and engineering documentation for the NextCybr platform: how every feature works today, across
`nextcybr-server`, `nextcybr-portal` and `nextcybr-admin-portal`.

Built with [Docusaurus 3](https://docusaurus.io/), Mermaid diagrams and offline full-text search.

## Quick start

```bash
npm install
npm run sync     # regenerate reference pages from master of the three repos
npm start        # http://localhost:3000
```

The three app repos are expected next to this folder:

```text
projects/
├── nextcybr-server/
├── nextcybr-portal/
├── nextcybr-admin-portal/
└── nextcybr-docs/        ← this project
```

Override with `REPOS_DIR=/path npm run sync`, or document a different ref with `SYNC_REF=origin/master`.

## Scripts

| Script | Does |
| --- | --- |
| `npm start` | Dev server with hot reload |
| `npm run sync` | Regenerate `docs/reference/**` and `src/data/sync.json` from `master` (via `git show`, so the checked-out branch doesn't matter) |
| `npm run build` | Production build into `build/`. Fails on broken links. |
| `npm run serve` | Serve the production build. Search works here. |
| `npm run docs:refresh` | `sync` + `build` |

## Structure

```text
docs/
├── getting-started/   Overview, personas, architecture, local setup, glossary
├── features/          One guide per product feature (hand-written)
├── apps/              Portal and admin portal internals
├── backend/           Auth, entitlements, AI usage, real-time, jobs, integrations, errors
├── operations/        Environments, deployment, testing, maintaining these docs
└── reference/         GENERATED — API, data model, plan matrix, frontend routes
scripts/sync.mjs       Reference generator
src/
├── pages/index.js     Home page
├── components/        FeatureMeta (At-a-glance box), RoleBadge
├── theme/             MDX component registration
└── css/custom.css     Brand theme (portal tokens), API/plan pills
```

Never edit `docs/reference/**` by hand. See `docs/operations/maintaining-docs.md`.
