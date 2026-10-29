---
title: Admin portal
sidebar_label: Admin portal (nextcybr-admin-portal)
sidebar_position: 2
description: The internal back-office — every screen, what it does and the API it calls.
---

# Admin portal (`nextcybr-admin-portal`)

A Vite + React 19 single-page app for NextCybr staff, served as static files at `admin.nextcybr.ai`. Every API call goes to `/api/v1/admin/*` (or the admin variants of shared routers) with an `ADMIN` token.

## Stack

React Router 7 · Redux Toolkit · Tailwind CSS v4 + Radix primitives · React Hook Form · Axios (`src/utils/axiosInstance.js`, admin refresh flow) · Tiptap (blog) · Recharts (dashboard) · S3 presigned uploads (`src/utils/uploadToS3.js`).

```text
src/
├── App.jsx            Route table (all routes behind PrivateRoute except /signin)
├── api/               adminApi, authApi, blogApi, entitlementApi, payoutApi, planApi, …
├── module/<area>/     screens/ + components/ per area
├── pages/             Approvals listing and modals
├── screens/           Sign-in, user detail, dashboard shell
├── store/slices/      Redux state per area
└── components/        Layout, tables, skeletons, EntityListScreen, InDev
```

## Screens

| Route | Screen | What admins do | Main endpoints |
| --- | --- | --- | --- |
| `/dashboard` | `DashboardStatsScreen` | Platform KPIs and charts: users by role, active users, jobs, revenue | `GET /admin/get-dashboard-stats` |
| `/approvals` | `ApprovalsListing` | Approve, reject or bulk-approve pending mentors and recruiters | `/admin/approvals/*` |
| `/waitinglist` | `WaitingListScreen` | Launch waitlist and CSV export | `/client/coming-soon/notify-emails[/export]` |
| `/students` · `/company` · `/mentors` | `StudentScreen` · `CompanyScreen` · `MentorScreen` | Search, filter and open users | `GET /admin/get-users` |
| `/:userType/detail` | `UserDetail` | Full profile, subscription invoices and mentorship purchases | `GET /admin/get-user`, `/admin/get-all-invoices?id=`, `/admin/get-user-purchases` |
| `/blogs` · `/blogs/post-new-blog` | `BlogScreen` · `CreateBlogScreen` | Write, preview and edit posts with images | `/admin/blog`, `/admin/uploads/*` |
| `/entitlements` | `EntitlementsScreen` | **Plans tab**: create/edit plans, per-country prices, the plan × feature matrix, assign a plan to a user. **Feature definitions tab**: the registry. | `/admin/dynamic-plans`, `/admin/plans/:id/features`, `/admin/plans/:id/country-prices`, `/admin/plans/:id/assign`, `/admin/feature-definitions` |
| `/subscription-discounts` | `SubscriptionDiscountsScreen` | Create and edit platform discount codes | `/admin/subscription-discounts` |
| `/payments` | `PaymentList` | Subscriptions, invoices and mentor-service purchases | `/admin/get-all-subscriptions`, `/admin/get-all-invoices`, `/admin/get-all-mentor-services` |
| `/payouts` · `/payouts/:payoutId` | `PayoutList` · `PayoutDetail` | Weekly payouts and their transactions, manual reconcile | `/admin/get-all-payouts`, `/admin/payouts/:id`, `POST …/reconcile` |
| `/payout-accounts` | `PayoutAccounts` | Mentors' Stripe Connect status | `/admin/payout-accounts` |
| `/mentorship-activity` | `MentorshipActivityScreen` | All sessions and webinar registrations. Admin cancel (with refund). | `/admin/sessions/:id/cancel`, `/admin/webinar-registrations/:id/cancel` |
| `/support` · `/support/ticket` | `SupportTicketListing` · `SupportRequestScreen` | Ticket queue, conversation, status changes | `/admin/support/*` |
| `/reports` · `/settings` | `InDev` | Placeholder, not built yet | — |
| `/subscriptions` | — | Redirects to `/entitlements` | — |

## Known gaps (as of this sync)

:::warning Frontend ↔ API mismatches
- **Ticket priority.** `SupportDetailScreen` calls `PATCH /admin/support/tickets/priority`, which the server doesn't define (it returns 404). Only status changes are supported (`PATCH /admin/support/tickets/status`).
- **Unused wrappers that point at missing routes.** `deleteSupportTicketApi`, `createSupportTicketApi`, `getSupportTicketDetailsApi` (`/support/tickets/:id`), `getBlogByIdApi` (`/blog/:id`) and `deleteBlogApi` (`/blogs/:id`) aren't called anywhere and don't match server routes.
- **Server features with no admin UI yet.** Create users (`POST /admin/create-user[-with-profile]`), edit or soft-delete users (`PATCH /admin/update-user`, `/admin/delete-user`), delete blog posts (`DELETE /admin/blog?id=`), and the job, applicant and hired-candidate reports (`/admin/get-all-jobs`, `/admin/job-details`, `/admin/get-company-jobs`, `/admin/get-student-job-applications`, `/admin/job-applications`, `/admin/hired-candidates`).
:::

## Plan changes take effect immediately

Saving a plan's feature matrix calls `invalidatePlanCache(planId)` on the server, so the change applies right away on that instance. Other cluster instances pick it up within the 60-second cache TTL. See [Entitlements engine](/backend/entitlements#caching).

## Scripts

`npm run dev` (Vite with `--host`) · `npm run build` · `npm run lint` · `npm run format:check` · `npm test` (Vitest).
