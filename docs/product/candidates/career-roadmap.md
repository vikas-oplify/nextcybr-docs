---
title: Career roadmap
sidebar_position: 3
description: AI-generated career paths, progress tracking, history and comparison by plan.
---

# Career roadmap

The **Personalized Roadmap** is an AI-generated plan from the candidate's profile to a target cybersecurity role. It's broken into **stages**, each with **milestones** and **action items**. The candidate ticks items off and progress shows on the dashboard.

## Business rules

| Rule | Detail |
| --- | --- |
| Generating a roadmap | Free 1 · Pro 5 · Pro Plus 15 per 30 days |
| Active roadmaps | One active roadmap, which a new generation replaces. **Pro Plus** can keep several active "scenarios" side by side. |
| History | Replaced roadmaps go to history, read-only. Free: none visible · Pro: last 5 · Pro Plus: all. |
| Nothing is deleted | Hidden history comes back after an upgrade, and the app says how many are hidden |
| Progress | Self-reported: the candidate marks items done. Nothing is verified. Only active roadmaps can be updated. |
| Compare career paths | **Pro Plus only.** A side-by-side "what if" between paths. Not saved. |

## Edge cases worth testing

- Free user generates a second roadmap within 30 days → blocked.
- Pro user generates a new roadmap → the old one moves to history, and its progress is kept but read-only.
- Pro user with 7 past roadmaps sees 5. After upgrading to Pro Plus they see all 7.
- Try to tick an item on a roadmap in history → not allowed.

[Engineering detail →](/features/career-roadmaps)
