---
title: Notifications & emails
sidebar_position: 2
description: Every email and in-app notification users receive, when it fires, and how users control them.
---

# Notifications & emails

Users get **in-app notifications** (bell icon, live) and **emails**. Most product events produce both.

## Email catalogue

| Area | Email | Sent to | When |
| --- | --- | --- | --- |
| Account | Verification code | New user | On sign-up |
| | Welcome | New user | Account created |
| | Login alert | User | Sign-in from a new device or browser |
| | Account approved / rejected | Recruiter, Mentor | Admin decision |
| | Account deactivated | User | Self-deactivation |
| | Launch waitlist welcome | Visitor | Joins the pre-launch waitlist |
| Jobs | Job posted | Recruiter | Job published |
| | Shortlisted | Candidate | Recruiter shortlists them |
| | Application status changed | Candidate | Any status change (can be turned off) |
| | Interview scheduled / cancelled | Candidate | Recruiter schedules or cancels |
| | Job alert digest | Candidate | Every 7 / 3 / 1 days by plan (can be turned off) |
| | Weekly summary | Candidate | Sundays |
| Mentorship | Session booked / confirmed | Candidate, Mentor | Booking, payment confirmed |
| | Session cancelled / rescheduled | Both | Either side changes it |
| | Session reminder | Both | Shortly before start |
| | Session request | Mentor | Candidate requests a session |
| | New review | Mentor | Candidate reviews a session |
| | Waitlist slot available | Candidate | A slot opens on a day they waitlisted |
| | Webinar registered / cancelled / reminder | Candidate | Registration, cancellation, before start |
| Money | Payment event | User | Subscription payment issues |
| | Payout receipt | Mentor | Each weekly payout |

## User control

| Preference | Covers |
| --- | --- |
| Application updates | Application status emails |
| Job alerts | The job alert digest |
| Activity, Promotions, Newsletter | Activity notices and marketing |
| Security | Login alerts and account security. **Always on.** |

Everything is on by default. In-app notifications can be marked read one at a time or all at once, and deleted.

## Edge cases worth testing

- Turn off application updates → no status email, but the in-app notification still arrives.
- Sign in twice from the same browser → only the first sign-in sends a login alert.
- A notification arrives while the user is on another page → the bell count updates without a refresh.

[Engineering detail →](/backend/background-jobs)
