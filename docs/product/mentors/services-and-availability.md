---
title: Services & availability
sidebar_position: 1
description: What mentors sell, plan limits on services, availability windows, blackout days, discount codes and badges.
---

# Services & availability

## What mentors sell

| Service | Shape |
| --- | --- |
| **1:1 session** | A bookable call with a set duration and price (optionally discounted). Booked into the mentor's availability. |
| **Webinar** | A one-to-many session at a fixed date and time, with a seat capacity and a price (or free) |

## Business rules

| Rule | Free | Pro |
| --- | :-: | :-: |
| Needs admin approval before publishing | ✓ | ✓ |
| Active 1:1 services | 3 | Unlimited |
| Active webinars | 2 | Unlimited |
| Deactivate a service (hidden, counts free) | ✓ | ✓ |
| Archive a service | — | ✓ |
| Discount codes | — | ✓ |

- **Prices are in USD.** The price at booking time is locked for that booking. Changing a price later never changes past bookings or earnings.
- **Discount codes** (Pro) are entered by the candidate at checkout and come off the service's current price. Percentage or flat amount, optional usage limit and expiry date (valid through that day). A code that makes the booking free confirms it straight away. Your earnings and platform fee are based on what the candidate actually paid. Codes stop working if you leave Pro.
- A service only counts toward the limit while it's **active**.

## Availability

| Concept | Behaviour |
| --- | --- |
| **Weekly windows** | e.g. "Mondays 09:00–12:00", in the mentor's time zone. Candidates see bookable start times every 30 minutes within these windows. |
| **Blackout days** | Whole days the mentor is unavailable. Nothing can be booked on them, even if the weekly window says otherwise. |
| **Buffer** | Padding around each session (5 minutes by default, set per service), so back-to-back bookings leave a gap |
| **Booking cutoff** | New bookings close 4 hours before a slot |
| **Calendar view** | Candidates only see dates that still have at least one open slot |

## Badges

| Badge | Earned when |
| --- | --- |
| **Verified Mentor** | The NextCybr team approves the mentor |
| **Pro Mentor** | While the mentor is on the Pro plan. Removed when the subscription ends. |

## Edge cases worth testing

- Free mentor with 3 active 1:1 services creates a 4th → blocked. Deactivate one, then create → allowed.
- Add a blackout day on a day with weekly availability → no slots offered, and booking by API is refused.
- Change a service price after a booking → the booking and the mentor's earnings keep the old price.
- Mentor in IST and candidate in PST → the candidate sees slots converted to their time zone.

[Engineering detail →](/features/mentorship)
