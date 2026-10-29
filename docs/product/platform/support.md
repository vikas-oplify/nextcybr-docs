---
title: Support desk
sidebar_position: 3
description: How users raise tickets, priority by plan, and how the NextCybr team handles them.
---

# Support desk

## Raising a ticket

- Users pick a **category** and then a **reason**. Some reasons ("Other") need a short description.
- They describe the issue and can attach up to **3 screenshots** (images, 2 MB each).
- Tickets are either **Support** or **Bug**.

## Priority by plan

| Plan level | Support tier | Starting priority |
| --- | --- | --- |
| Free (all audiences) | Standard | Normal |
| Candidate Pro, Recruiter Pro, Mentor Pro | Priority | One level higher |
| Candidate Pro Plus, Recruiter Enterprise | Highest / Dedicated | One level higher, sorted first within that level |

## Lifecycle

```mermaid
stateDiagram-v2
  [*] --> Open
  Open --> In_progress: team picks up
  In_progress --> Resolved
  Open --> Resolved
  Resolved --> Closed
```

- Users and the team reply in a threaded conversation on the ticket.
- Users can mark their own ticket resolved.
- The team works the queue in the admin portal: filters, replies, status changes and **priority changes** (Low / Medium / High).
- The team can **delete** a ticket. It disappears from the queue and from the user's ticket list, and nobody can reply to it, but it's kept on record (soft delete).

## Edge cases worth testing

- Attach 4 screenshots, or one of 3 MB → rejected.
- Choose "Other" with no description → rejected.
- A Pro user's new ticket starts at a higher priority than a Free user's.
- Admin changes priority without changing the value → saves without error.
- Admin deletes a ticket → it's gone from the user's list, and the user's open ticket page can no longer send replies.


[Engineering detail →](/features/support)
