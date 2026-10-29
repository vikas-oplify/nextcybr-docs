---
title: Messaging
sidebar_position: 1
description: Who can message whom, outreach limits per plan, and real-time chat behaviour.
---

# Messaging

## Who can message whom

| From → To | Can start a chat? | Limit on new chats |
| --- | --- | --- |
| Recruiter → Candidate | ✓ | Free: 5 new per day. Pro/Enterprise: unlimited. |
| Candidate → Recruiter | ✗. Can only **reply** after the recruiter starts. | — |
| Mentor → Candidate | ✓ | Free: 10 new per month. Pro: 50 per month. |
| Candidate → Mentor | Free: only mentors they've booked (session or webinar). Pro / Pro Plus: any mentor. | — |
| Mentor ↔ Recruiter | ✗ | — |

- Limits only apply when **starting a new** conversation. Replies never count.
- A candidate's "request a session" from a mentor's profile also opens a chat, so the same Free-plan rule applies.

## Chat behaviour

- Messages arrive instantly, with **typing indicators**, **online / last seen** status and **read receipts**.
- An unread badge shows the total of unread messages.
- Within chat, candidates can search for mentors to message. Recruiters find candidates through candidate search instead.

## Edge cases worth testing

- A Free candidate tries to message a recruiter who hasn't contacted them → refused.
- The recruiter messages the candidate → the candidate can now reply.
- A Free mentor starts 10 chats this month, then an 11th → blocked. Replying in an existing chat → allowed.
- Two browser tabs open on one account → messages and read receipts stay in sync.

[Engineering detail →](/features/messaging)
