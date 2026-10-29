---
title: AI Cyber Coach
sidebar_position: 2
description: The AI tutor — tracks, modes, levels, scoring, milestones and plan limits.
---

# AI Cyber Coach

An AI tutor for cybersecurity skills. The candidate picks **what** to study (track, optionally a certification), **how** (mode) and **at what level**, and the coach generates content, questions or scenarios and scores the answers.

## Choices

| Dimension | Options |
| --- | --- |
| **Tracks (8)** | Foundations · Blue Team · Red Team Labs (authorized only) · Purple Team · Cloud Security · Application Security · GRC · Certification Prep |
| **Modes (9)** | Learn a Topic · Take a Quiz · Mock Exam · Flashcards · Practice Scenario · Analyze Synthetic Logs · Safe Lab Coach · Skill Assessment · Interview Prep |
| **Levels** | Beginner · Intermediate · Advanced |
| **Certifications** | 25+, including CompTIA Security+/CySA+/PenTest+, ISC2 CC/CISSP/CCSP, ISACA CISA/CISM, GIAC, AWS Security, Microsoft SC-series, OSCP |

The candidate can also type a free-form question, and the coach suggests the right track and mode.

## Business rules

- **Safety first.** Offensive-security content stays fictional, lab-only and authorized. Requests that fail the safety check are redirected, **and don't use an interaction**.
- **What counts as an interaction**: each action that produces an AI response (starting a quiz, generating a scenario, AI-grading an answer). Submitting a quiz for scoring isn't AI-generated, so it doesn't count.
- **Free plan: 4 interactions per 30 days, and no more than 1 in any 7 days.** Paid plans have no interaction limit but use the AI token budget.
- **Scoring and progress.** Scores feed a per-track average. **70% or above earns a milestone.** Weak topics spotted in grading drive personalised recommendations.
- **History.** Completed sessions stay viewable.
- **Push to profile.** Skills from passed tracks and certifications studied can be added to the candidate's profile in one click.

## Edge cases worth testing

- Free user: use 1 interaction, then try another within 7 days → blocked, even though 3 of the 4 monthly are left.
- Ask something unsafe (e.g. attacking a real company) → redirected, and the interaction count doesn't change.
- Score exactly 70% → milestone awarded. 69% → not awarded.
- Push to profile twice → no duplicate skills.

[Engineering detail →](/features/cyber-coach)
