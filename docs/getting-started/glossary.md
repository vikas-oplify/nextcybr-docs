---
title: Glossary
sidebar_position: 5
description: Terms used across the product, code and these docs.
---

# Glossary

| Term | Meaning |
| --- | --- |
| **Candidate** | A job seeker / learner. Role `STUDENT` in code and the API. |
| **Recruiter** | A hiring organisation. Role `COMPANY`. |
| **Mentor** | An industry professional selling 1:1 sessions and webinars. Role `MENTOR`. |
| **Admin** | NextCybr staff using the admin portal. Separate `Admin` table, token role `ADMIN`. |
| **Approval** | `User.approvedByAdmin`. Candidates are approved at sign-up. Mentors and recruiters wait for an admin before they can publish services or jobs. |
| **NextGen CV** | The candidate-facing name of the AI CV/resume builder. |
| **Cyber Coach** | AI tutor with nine modes (quiz, mock exam, flashcards, scenarios, log analysis, safe lab, skill assessment, interview prep, learn a topic). |
| **Roadmap / career path** | AI-generated plan of stages, milestones and action items for a target role. |
| **Plan** | A tier for one audience (`Plan.key` + `Plan.userType`), e.g. Candidate `PRO`, Recruiter `ENTERPRISE`. |
| **Feature definition** | A gateable capability or limit (`FeatureDefinition.key`), e.g. `CV_GENERATION_MONTHLY`. |
| **Entitlement** | The resolved value of a feature for a user's plan: enabled, limit, unlimited. |
| **Quota / consumption feature** | A counter that resets on a schedule (daily, rolling 30 days, calendar month, billing cycle), tracked in `UsageCounter`. |
| **Capacity feature** | A cap on how many of something exist at once (active jobs, shortlists). Counted live from domain tables. |
| **AI tokens** | Shared AI budget per user (daily + rolling 30 days). Each AI call reserves an estimate and settles to the real token count. |
| **AI Match Run** | A recruiter's "find candidates for this job" AI run. Saved and re-openable for free. |
| **Hold** | An unpaid booking/registration in `PENDING` that reserves a slot or seat for `PENDING_HOLD_MINUTES` (default 15). |
| **Blackout date** | `MentorAvailabilityException`: a whole day a mentor is unavailable. |
| **Settlement** | Turning a finished session/webinar into a `MentorTransaction` that credits the mentor. |
| **Payout batch** | Weekly job that transfers a mentor's matured, unpaid ledger total via Stripe Connect. |
| **Hold days** | `PAYOUT_HOLD_DAYS` (default 7): how long earnings wait before a batch may pay them. |
| **Platform fee** | `PLATFORM_FEE_RATE` (default 0.15): NextCybr's cut of each mentor sale. |
| **Login session** | `LoginSession` row per device/browser. Revocable, and backs refresh tokens. |
| **Coming-soon gate** | Pre-launch mode where the portal shows a waitlist page and an access password. |
