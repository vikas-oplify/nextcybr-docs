---
title: Third-party integrations
sidebar_position: 6
description: Stripe, Stripe Connect, Agora, OpenAI, AWS S3/CloudFront, Google and LinkedIn OAuth, SMTP and ImageKit — what each does and where it's wired.
---

# Third-party integrations

| Service | Purpose | Server code | Env vars |
| --- | --- | --- | --- |
| **Stripe Billing** | Plan subscriptions through Checkout, subscription schedules for downgrades, invoices, one-invoice coupons | `modules/subscription`, `modules/webhook` | `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET[_TWO]`, `STRIPE_PRICE_*` |
| **Stripe Payments** | PaymentIntents for 1:1 bookings and webinar seats, refunds | `modules/mentor/mentorSession`, `mentorWebinar`, `mentor.shared` | same |
| **Stripe Connect** (Express) | Mentor payout accounts and weekly transfers | `modules/mentor/payoutAccount.js`, `payoutLedger.js`, `mentorScheduledJobs.js` | `STRIPE_CONNECT_WEBHOOK_SECRET`, `PLATFORM_FEE_RATE`, `PAYOUT_HOLD_DAYS` |
| **Agora RTC** | Video for sessions, webinars and interviews. The server mints tokens only (`agora-token`). | `utils/agora.js` | `AGORA_APP_ID`, `AGORA_APP_CERTIFICATE` |
| **OpenAI** | All AI features | `services/ai*.js`, `resumeBuilderByAIService.js` | `OPENAI_API_KEY`, `OPENAI_MODEL`, `OPENAI_MAX_TOKENS` |
| **AWS S3 + CloudFront** | Uploads (profile media, ticket screenshots, blog images) and presigned admin uploads | `lib/s3Client.js`, `lib/s3Helpers.js`, `lib/media.js`, `modules/uploads`, `modules/media` | `AWS_REGION`, `AWS_ACCESS_KEY_ID`, `AWS_SECRET_ACCESS_KEY`, `AWS_S3_BUCKET`, `CDN_URL` |
| **Google Sign-In** | ID-token sign-in | `modules/auth` (`google-auth-library`) | `GOOGLE_CLIENT_ID` |
| **LinkedIn OAuth** | Sign-in | `modules/auth` | `LINKEDIN_CLIENT_ID`, `LINKEDIN_CLIENT_SECRET`, `LINKEDIN_REDIRECT_URI` |
| **SMTP** (Titan / Nodemailer) | Transactional and digest email | `utils/emailHandler.js`, `workers/email.worker.js` | `USE_TITAN_EMAIL_SERVICE`, `TITAN_EMAIL_*`, `NODE_MAILER_*`, `SUPPORT_EMAIL`, `ADMIN_ALERT_EMAIL` |
| **ImageKit** | Legacy image hosting (still allowed in portal `next.config.mjs` image domains) | `utils/handleImageUpload.js` | `*_IMAGEKIT` |
| **Redis** | Sessions cache, token blacklist, presence, BullMQ | `config/redisClient.js` | `REDIS_URL` or `REDIS_HOST/PORT/USERNAME/PASSWORD`, `REDIS_TLS` |
| **PostgreSQL** | Primary datastore (Prisma 7 + `@prisma/adapter-pg`) | `config/prisma.js` | `DATABASE_URL` |

## Stripe webhooks

Two endpoints, both taking the **raw** body (mounted before `express.json`) and verifying signatures:

<details>
<summary><code>POST /api/v1/payment/webhook</code>: platform events</summary>

| Event | Effect |
| --- | --- |
| `checkout.session.completed` | Activates the subscription on the chosen `Plan`, records a discount redemption |
| `invoice.paid` | Updates period dates, writes an `Invoice`, renews |
| `invoice.payment_failed` | Marks payment trouble, `PAYMENT_EVENT` email |
| `customer.subscription.updated` | Syncs plan, cycle, cancel-at-period-end and schedules. Awards or revokes `PRO_MENTOR`. |
| `customer.subscription.deleted` | Back to Free |
| `payment_intent.succeeded` | Confirms a `PENDING` session or registration |
| `payment_intent.payment_failed` / `.canceled` | Releases the hold (`EXPIRED`) |
| `charge.refunded` | Marks refunds. A refund after batching creates a negative ledger `ADJUSTMENT`. |
| `charge.dispute.created` | Ledger adjustment + admin alert |
| `transfer.reversed` | Admin alert on a reversed mentor payout |

</details>

<details>
<summary><code>POST /api/v1/payment/webhook/connect</code>: Connect account events</summary>

| Event | Effect |
| --- | --- |
| `account.updated` | Syncs `MentorPayoutMethod.status` from Stripe capabilities |
| `account.application.deauthorized` | Marks the payout method disconnected. Batches skip it. |

</details>

Unhandled event types are acknowledged with 200. A handler error is logged and returns an error status, so Stripe retries.
