---
title: Finding & booking mentors
sidebar_position: 5
description: Mentor discovery, AI mentor match, booking rules, cancellations, refunds and reviews — from the candidate's side.
---

# Finding & booking mentors (candidate side)

## Discovering mentors

| Way in | Behaviour |
| --- | --- |
| **Mentor directory** | Mentors with public profiles. **Mentor Pro accounts are listed first**, then by highest rating. |
| **Browse services** | All active 1:1 services and webinars from approved mentors |
| **Suggested mentors** | Rule-based suggestions from the profile. Free, no limits. |
| **AI mentor match** | AI ranks mentors for the candidate's goals. Free 3 · Pro 15 · Pro Plus unlimited per 30 days. Free sees **1** match, paid plans 5, and paid plans also see **why** each mentor matches. |
| **Mentor profile** | Services, ratings and reviews from completed sessions |

## Booking a 1:1 session

| Rule | Detail |
| --- | --- |
| Slots | 30-minute start times inside the mentor's weekly availability. Days the mentor blocked off can't be booked. |
| Booking cutoff | Booking closes **4 hours before** the start |
| Buffers | Mentors can keep a gap between sessions (5 min by default), so a slot right next to another booking may not be offered |
| Price | Fixed at booking. Later price changes by the mentor don't affect it. Prices are in USD. |
| Payment | Paid sessions are held for **15 minutes** while the candidate pays. Leaving checkout releases the slot. Free (or $0) sessions confirm instantly. |
| Double booking | Impossible: two people paying for the same slot at once can't both succeed |
| Full day | The candidate can join a **waitlist** and gets an email when a slot opens up (after a cancellation or reschedule) |
| Request a session | From a mentor's profile, outside the calendar. Notifies the mentor and opens a chat. |

## After booking

| Event | Outcome for the candidate |
| --- | --- |
| Candidate cancels | Allowed up to **2 hours before** the start, with a full refund for paid sessions |
| Mentor cancels | Full refund. Waitlisted candidates are told the slot is free. |
| Either side reschedules | Up to 2 hours before. The new time gets the same availability checks. |
| Candidate joins | The video room opens **30 minutes before** the start |
| Mentor never joins | The session is cancelled automatically and **fully refunded** |
| Candidate never joins (mentor did) | Marked as a no-show. **No refund**, and the mentor is paid. |
| After the session | The candidate can leave a rating and review, and the mentor is notified |
| Reminders | Both sides get a reminder email before the start |

## Messaging mentors

On **Free**, a candidate can start a chat only with a mentor they've booked (a session or webinar). They can always reply when a mentor messages them first. **Pro and Pro Plus** can message any mentor.

## Webinars

See [Sessions & webinars](../mentors/sessions-and-webinars.md#webinars) for capacity, joining and refunds.

## Edge cases worth testing

- Try to book 3h59m before the start → refused.
- Open checkout, close it, and within 15 minutes another candidate tries the same slot → blocked. After 15 minutes → available.
- Two candidates pay for the same slot at the same moment → only one succeeds, and the other is never charged.
- Cancel 1h59m before → refused.
- A Free candidate messages a mentor they haven't booked → refused. After booking a webinar with them → allowed.
- The mentor doesn't show up → refund issued and the session shows as cancelled.

[Engineering detail →](/features/mentorship)
