---
title: Plans & pricing
sidebar_position: 2
description: What each plan includes for candidates, recruiters and mentors, and how billing behaves.
---

# Plans & pricing

Each audience has its own plan ladder. These are the **launch defaults**. The NextCybr team can change any limit, add country-specific prices, or create a custom plan for a single customer from the admin portal, with no release needed.

## Candidate plans

| | Free | Pro ($19/mo) | Pro Plus ($29/mo) |
| --- | :-: | :-: | :-: |
| **NextGen CV**: CV creations / 30 days | 1 | Unlimited | Unlimited |
| AI CV assessments / 30 days | 1 | Unlimited | Unlimited |
| All CV templates | — | ✓ | ✓ |
| AI section enhancer | — | ✓ | ✓ |
| Advanced CV assessment | — | ✓ | ✓ |
| **Cyber Coach** interactions | 4 per 30 days, max 1 per 7 days | Unlimited* | Unlimited* |
| **Career roadmap** generations / 30 days | 1 | 5 | 15 |
| Active roadmap scenarios | 1 | 1 | Unlimited |
| Past roadmaps visible | — | 5 | Unlimited |
| Career path comparison | — | — | ✓ |
| **AI job search** / 30 days | 1 | 30 | Unlimited |
| Jobs shown per AI search | 5 | up to 10 | up to 10 |
| Advanced job-fit breakdown | — | — | ✓ |
| Saved jobs | 5 | 40 | Unlimited |
| Job alert email | every 7 days | every 3 days | daily |
| Job alerts also in-app | — | ✓ | ✓ |
| **AI mentor match** / 30 days | 3 | 15 | Unlimited |
| Mentors shown per match | 1 | 5 | 5 |
| Why-this-mentor reasoning | — | ✓ | ✓ |
| Message any mentor (not only booked ones) | — | ✓ | ✓ |
| AI tokens: daily / 30 days | 5k / 150k | 25k / 750k | 50k / 1.5M |
| Support priority | Standard | Priority | Highest |

\*Unlimited interactions, but every AI action still draws on the AI token budget.

## Recruiter plans

| | Free | Pro ($99/mo) | Enterprise (custom) |
| --- | :-: | :-: | :-: |
| Active job postings | 2 | Unlimited | Unlimited |
| Re-activations of archived/closed jobs / month | 2 | Unlimited | Unlimited |
| AI candidate searches / month | 5 | Unlimited | Unlimited |
| AI match runs ("find candidates for this job") / day | 2 | Unlimited | Unlimited |
| Candidates scored per match run | 25 | 50 | Unlimited |
| Detailed AI match explanations | — | ✓ | ✓ |
| Save & reopen searches and match runs | — | ✓ | ✓ |
| Shortlisted candidates at once | 12 | Unlimited | Unlimited |
| Candidates added to shortlist / month | 6 | Unlimited | Unlimited |
| New conversations with sourced candidates / day | 5 | Unlimited | Unlimited |
| Job templates | — | ✓ | ✓ |
| Candidate & shortlist export (CSV) | — | ✓ | ✓ |
| Shared company workspace (multi-seat) | — | ✓ | ✓ |
| Employee development seats | 1 | 2 | Unlimited |
| AI tokens: daily / 30 days | 5k / 150k | 150k / 4.5M | Unlimited |
| Support priority | Standard | Priority | Dedicated |

:::caution Not built yet
**Shared company workspace** and **employee development seats** are defined in the plans but have no product behind them yet. Don't sell or test them.
:::

Recruiter screens show AI allowance as *searches and match runs remaining*, never as raw tokens.

## Mentor plans

| | Free | Pro ($19/mo) |
| --- | :-: | :-: |
| **Platform fee on paid bookings & webinars** | **15%** | **10%** |
| Active 1:1 services | 3 | Unlimited |
| Active webinars | 2 | Unlimited |
| Archive services (instead of only deactivating) | — | ✓ |
| Discount codes | — | ✓ (manage only, see limitations) |
| Listed first in the mentor directory | — | ✓ |
| Advanced earnings analytics | — | ✓ |
| Full candidate profile views / month | 25 | 250 |
| AI candidate (mentee) searches / month | 5 | 25 |
| Detailed candidate-match explanations | — | ✓ |
| Shortlisted candidates | 10 | Unlimited |
| New conversations with candidates / month | 10 | 50 |
| "Pro Mentor" badge | — | ✓ |
| AI tokens: daily / 30 days | 5k / 150k | 25k / 750k |
| Support priority | Standard | Priority |

## How billing behaves

| Situation | What happens |
| --- | --- |
| **Upgrade** (to a higher tier) | Takes effect immediately. The user pays the prorated difference. |
| **Monthly → yearly** on the same plan | Immediate, like an upgrade |
| **Downgrade**, or yearly → monthly | Scheduled for the next renewal. The user keeps the current plan until then. |
| Choose the current plan again while a downgrade is pending | Cancels the pending downgrade |
| **Cancel** | Access continues until the end of the paid period, then the account returns to Free. A pending downgrade is dropped. |
| **Undo cancel** before the period ends | The subscription carries on as normal |
| Try to change plan while cancellation is pending | Blocked. The user must undo the cancellation first. |
| Start a second checkout while subscribed | Blocked, even while a payment is being retried |
| **Payment fails** on renewal | The user gets an email and Stripe retries. The plan ends if retries fail. |
| **Discount code** (created by the NextCybr team) | Applies to the first invoice only. It's only counted as used once checkout actually completes. |
| **Country pricing** | If the team has set a price for the user's country, plan pages and checkout use it. Otherwise the base price applies. |

Users see plan, renewal date and invoices under **Payment & Finances**, and remaining allowances on usage cards across the app.

## Edge cases worth testing

- Hit a limit exactly, then try once more. The second attempt must be refused with an upgrade message, and the allowance must not go negative.
- Make an AI action fail (e.g. upload an unreadable PDF). The allowance must not go down.
- Downgrade, then re-select the current plan before renewal. The downgrade must be cancelled.
- Cancel, then check that paid features still work until the period end date.
- Upgrade mid-cycle and check the prorated charge and that the new limits apply immediately.
- A user in a country with a custom price sees that price on the plan page *and* at checkout.

[Engineering detail →](/features/plans-billing) · [Full feature matrix →](/reference/plans)
