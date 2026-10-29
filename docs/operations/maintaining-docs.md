---
title: Maintaining these docs
sidebar_position: 4
description: How this site is built, how the reference pages regenerate from master, and conventions for writing guides.
---

# Maintaining these docs

This site lives in `nextcybr-docs`, next to the three app repos. It's a **Docusaurus 3** site with Mermaid diagrams and offline full-text search.

## Two kinds of page

| Kind | Where | How it changes |
| --- | --- | --- |
| **Generated reference** | `docs/reference/**`, `src/data/sync.json` | `npm run sync`. Never edit by hand. |
| **Hand-written guides** | `docs/getting-started`, `features`, `apps`, `backend`, `operations` | Edit in a PR alongside (or after) the code change |

## Syncing from master

```bash
npm run sync          # reads ../nextcybr-{server,portal,admin-portal} at `master`
```

`scripts/sync.mjs` reads every file with `git show master:<path>`, so it documents **master** whatever branch each repo has checked out. It generates:

- **API reference**: parses `app.js` mounts and every `*.routes.js`, including roles, `requireApproved`, `requireFeature`, `requireAndConsume`, `checkAiUsage`, rate limiters and Zod validators.
- **Data model**: parses `prisma/schema.prisma` into per-domain pages with ER diagrams, plus an enums page. Domain grouping is the `DOMAINS` table in the script. New models land in "Other" until you assign them.
- **Plans & feature matrix**: evaluates the `PLANS`, `FEATURES` and `VALUES` arrays in `prisma/seedEntitlementSystem.js`.
- **Frontend route maps**: portal `app/**/page.js`, the role sidebar, and the admin `App.jsx` routes.
- **`src/data/sync.json`**: commit SHAs and counts, shown on the home page.

Options: `REPOS_DIR=/path/to/repos` and `SYNC_REF=origin/master`. Run `git fetch` in each repo first if you use `origin/master`.

New routers appear on an "Other" API page until they're added to `API_GROUPS` in the script.

## Writing a feature guide

1. Create `docs/features/<slug>.mdx` with `title`, `sidebar_position` and `description` front matter.
2. Open with one paragraph on what the feature is for, then a `<FeatureMeta>` block:
   ```mdx
   <FeatureMeta
     roles={["STUDENT", "MENTOR"]}
     tags={["AI"]}
     portal={<><code>/route</code></>}
     server={<><code>src/modules/x</code></>}
     models={<><code>Model</code></>}
     plan={<><code>FEATURE_KEY</code></>}
   />
   ```
3. Explain the flow (Mermaid `sequenceDiagram` / `stateDiagram-v2`), then the rules the **server** enforces, with real constants.
4. End with links into the generated API reference.
5. `Tabs`, `TabItem`, `FeatureMeta` and `RoleBadge` are available in every MDX file without imports.

## Publishing

Pushing to `main` deploys the site to GitHub Pages (`.github/workflows/deploy.yml`). **The published site is public.** Keep anything an attacker could use out of `main`: credentials, test or bypass mechanisms, server-access steps, secret-store names. Endpoints that must stay out of the generated reference go in `INTERNAL_ONLY_ROUTES` in `scripts/sync.mjs`.

## Local preview & build

```bash
npm install
npm start             # dev server with hot reload
npm run build         # production build; fails on broken links
npm run serve         # serve the build
```

The search index is built at `npm run build` time, so search only works on a built site, not in `npm start`.
