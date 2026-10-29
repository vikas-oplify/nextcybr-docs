---
title: Known limitations
sidebar_position: 7
description: Behaviour that is incomplete, planned or known to be broken today — check here before logging a bug.
---

# Known limitations

Check here before logging a bug or writing a requirement that assumes these work.

## Not built yet

| Area | Limitation |
| --- | --- |
| Recruiter plans | **Shared company workspace** (multiple recruiters per company) and **employee development seats** are listed in the plans but have no product behind them |
| Mentor discount codes | Mentors on Pro can create and manage codes, but **codes can't be applied at checkout yet**. Nobody gets a discount from them. |
| CV upload | **PDF only.** Word (DOC/DOCX) uploads aren't supported. |
| Challenges (candidate menu) | Placeholder screen |
| Admin portal | No way to create, edit or delete users. No job, applicant or hire reports. **Reports** and **Settings** screens are placeholders. |
| Currency | All mentor prices and payments are in **USD** |

## Known issues

None open right now.

## Behaviour that is intended (not bugs)

| Behaviour | Why |
| --- | --- |
| A Free recruiter's third job is posted as **Archived** | Free plans have 2 active jobs. The job is kept, not lost. |
| Removing a shortlisted candidate doesn't give back a monthly addition | The monthly cap counts additions, not current size |
| A candidate who no-shows isn't refunded | The mentor turned up and is paid |
| Re-opening a saved match run doesn't use a run | Only fresh AI runs count |
| A deleted ticket or blog post can't be found again in the app | Deletes are soft: the record is kept for the record, but hidden everywhere. Restoring one needs an engineer. |
| A paid booking disappears from the mentor's list after 15 minutes | The candidate didn't finish paying, so the hold expired |
| Plan limit changes don't apply instantly everywhere | Changes made in the admin portal can take up to about a minute to apply |
| Portal sign-out after a few idle hours | The session ends after about 6 hours of inactivity |

[Engineering view of these gaps →](/apps/admin-portal#known-gaps-as-of-this-sync)
