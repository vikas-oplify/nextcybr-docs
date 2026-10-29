---
title: NextGen CV builder
sidebar_position: 1
description: How candidates create, improve and score their CV with AI, and what each plan unlocks.
---

# NextGen CV builder

"My NextGen CV" turns a candidate's profile, or an uploaded CV, into a structured, ATS-friendly CV. AI can improve individual sections and score the CV, and the candidate can keep several drafts in different templates.

## What it does

| Capability | How it behaves | Free | Pro / Pro Plus |
| --- | --- | :-: | :-: |
| **Create a CV from the profile** | AI drafts a full CV from profile data | 1 per 30 days | Unlimited |
| **Create a CV from an upload** | Upload an existing CV and AI rebuilds it. **PDF only, up to 10 MB.** | shares the 1 above | Unlimited |
| **Improve a section** | Rewrite one section (summary, experience, …) with AI | — | ✓ |
| **AI assessment** | Scores the CV and suggests improvements | 1 per 30 days | Unlimited + advanced scoring |
| **Templates** | Five layouts. **Minimal** is free. | Minimal only | All |
| **Drafts** | Save, rename, edit and delete CV drafts. Saving a new draft counts as a CV creation. | ✓ | ✓ |
| **History** | Past AI suggestions stay viewable | ✓ | ✓ |
| **Download** | Export the chosen template as PDF | ✓ | ✓ |

## Business rules

- **Failures are free.** If AI generation fails, the creation isn't counted.
- **Locked templates are enforced.** A Free user can't save a draft in a paid template, even by bypassing the UI.
- Every AI action also uses the candidate's **AI token budget**. A user with creations left can still be blocked if today's tokens are spent.

## Edge cases worth testing

- Free user: create one CV, then try a second within 30 days → upgrade prompt.
- Upload a Word file → rejected (PDF only). Upload an 11 MB PDF → rejected.
- Upload a scanned/image-only PDF → generation fails and the creation is **not** used.
- Free user picks a paid template → locked. Downgraded user with a draft in a paid template → check what they can still do.
- Use up today's AI tokens with Cyber Coach, then try to create a CV.

[Engineering detail →](/features/resume-builder)
