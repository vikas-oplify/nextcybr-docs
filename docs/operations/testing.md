---
title: Testing & quality
sidebar_position: 3
description: Unit tests, smoke tests, formatting and linting, git hooks and CI gates.
---

# Testing & quality

| | Server | Portal | Admin |
| --- | --- | --- | --- |
| Unit tests | Vitest (`tests/`, `*.test.js`) | Vitest (`tests/`) | Vitest (`tests/`) |
| Coverage | `npm run test:coverage` | `npm run test:coverage` | `npm run test:coverage` |
| Format | Prettier (`format:check`) | Prettier | Prettier |
| Lint | — | ESLint 9 flat config (`eslint.config.mjs`) | ESLint 9 flat config |
| Pre-commit | Husky + lint-staged (Prettier) | Husky + lint-staged (ESLint fix + Prettier) | Husky |
| CI (`ci.yml`) | tests, syntax check, `prisma validate` | Prettier + ESLint, tests | format, lint, tests |

## Server smoke tests

`prisma/smokeTest*.js` and `prisma/smoke*.js` are scripts that exercise a feature against a **real** database: entitlements, AI usage, plan country pricing, badges, coach transcripts, CV history, saved jobs, mentor payout onboarding/ledger/batch, blackout dates, recruiter tools, roadmap persistence, webhook plan resolution and more. Run them against a disposable copy of the database:

```bash
node prisma/smokeTestEntitlement.js
node prisma/smokeTestMentorPayoutBatch.js
```

## QA accounts

`prisma/seedTestAccounts.js` (enabled by `SEED_TEST_ACCOUNTS`) creates QA accounts on every plan tier. Ask the team for the current QA credentials.

## Before opening a PR

```bash
# server
npm run format:check && npm test
# portal
npm run check && npm test
# admin
npm run format:check && npm run lint && npm test
```
