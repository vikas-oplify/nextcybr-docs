import React from "react";
import Link from "@docusaurus/Link";
import Layout from "@theme/Layout";
import sync from "@site/src/data/sync.json";
import styles from "./index.module.css";

const PERSONAS = [
  {
    role: "STUDENT",
    title: "Candidate",
    to: "/getting-started/personas#candidate-student",
    text: "Profile, NextGen CV builder, Cyber Coach, roadmaps, job search and applications, mentor bookings.",
  },
  {
    role: "COMPANY",
    title: "Recruiter",
    to: "/getting-started/personas#recruiter-company",
    text: "Job postings, applicant pipeline, AI candidate search, shortlists, notes, templates and live interviews.",
  },
  {
    role: "MENTOR",
    title: "Mentor",
    to: "/getting-started/personas#mentor",
    text: "1:1 services, webinars, availability, discount codes, badges, earnings and Stripe Connect payouts.",
  },
  {
    role: "ADMIN",
    title: "Platform admin",
    to: "/getting-started/personas#platform-admin",
    text: "Approvals, users, plans and the feature matrix, payments, payouts, the support desk and the blog.",
  },
];

const FEATURES = [
  ["Authentication & sessions", "/features/authentication", "Email OTP, Google, LinkedIn, rotating refresh tokens, device sessions."],
  ["Onboarding & approvals", "/features/onboarding-approvals", "Role onboarding and the admin approval queue for mentors and recruiters."],
  ["Jobs & applications", "/features/jobs-applications", "Posting, discovery, saved jobs and the application pipeline."],
  ["Recruiter tools", "/features/recruiter-tools", "AI match runs, candidate search, shortlists, notes, templates, saved searches."],
  ["Live interviews", "/features/interviews", "Scheduling, rescheduling, Agora video rooms, missed-interview sweep."],
  ["AI Cyber Coach", "/features/cyber-coach", "Nine learning modes across eight tracks, grading, progress and milestones."],
  ["NextGen CV builder", "/features/resume-builder", "Generate, upload, enhance, assess and keep CV drafts."],
  ["Career roadmaps", "/features/career-roadmaps", "AI career paths, comparisons and progress tracking."],
  ["Mentorship", "/features/mentorship", "1:1 sessions, webinars, waitlists, reviews, discount codes, badges."],
  ["Mentor payouts", "/features/mentor-payouts", "Stripe Connect onboarding, earnings ledger, weekly batches."],
  ["Plans & billing", "/features/plans-billing", "Stripe subscriptions, country pricing, discounts and quotas."],
  ["Messaging & notifications", "/features/messaging", "Real-time chat rules, presence, notifications and preferences."],
];

const ENGINEERING = [
  ["API reference", "/reference/api", `${sync.counts.endpoints} endpoints with roles, plan gates and AI quotas.`],
  ["Data model", "/reference/data-model", `${sync.counts.models} Prisma models in ten domains, with ER diagrams.`],
  ["Background jobs", "/backend/background-jobs", "Email and scheduler queues, crons and sweeps."],
  ["Environments & deploy", "/operations/deployment", "Doppler configs, pm2, GitHub Actions and the release flow."],
];

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

export default function Home() {
  const { repos } = sync;
  return (
    <Layout
      title="Home"
      description="Product and engineering guide to the NextCybr cybersecurity careers platform."
    >
      <header className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Built from master · server · portal · admin</span>
            <h1 className={styles.title}>How every part of NextCybr works</h1>
            <p className={styles.lead}>
              The product and engineering guide to the cybersecurity careers platform: features by
              persona, the flows behind them, every API endpoint, the data model and how it all
              ships.
            </p>
            <div className={styles.ctas}>
              <Link className="button button--primary button--lg" to="/overview">
                Start with the overview
              </Link>
              <Link className="button button--secondary button--lg" to="/reference/api">
                Browse the API
              </Link>
            </div>
          </div>
          <div className={styles.terminal} aria-label="Platform at a glance">
            <div className={styles.comment}>// three apps, one API</div>
            <div>
              <span className={styles.k1}>portal</span> Next.js 16 · candidates, recruiters, mentors
            </div>
            <div>
              <span className={styles.k1}>admin</span>&nbsp; Vite + React Router · platform staff
            </div>
            <div>
              <span className={styles.k2}>server</span> Express 5 · Prisma · Socket.io · BullMQ
            </div>
            <div className={styles.comment} style={{ paddingTop: 8 }}>
              // backed by
            </div>
            <div>PostgreSQL · Redis · S3 · Stripe · Agora · OpenAI</div>
          </div>
        </div>
      </header>

      <main>
        <section className={`container ${styles.section}`}>
          <h2 className={styles.h2}>Read by persona</h2>
          <p className={styles.sub}>
            Each guide walks the screens a role sees, what they can do and which plan unlocks it.
          </p>
          <div className={styles.personaGrid}>
            {PERSONAS.map((p) => (
              <Link key={p.role} to={p.to} className={styles.personaCard}>
                <span className={styles.personaRole}>{p.role}</span>
                <span className={styles.personaTitle}>{p.title}</span>
                <span className={styles.personaText}>{p.text}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={`container ${styles.section}`}>
          <div className={styles.sectionHead}>
            <h2 className={styles.h2}>Feature guides</h2>
            <Link to="/features">All features →</Link>
          </div>
          <div className={styles.featureGrid}>
            {FEATURES.map(([name, to, desc]) => (
              <Link key={to} to={to} className={styles.featureCell}>
                <span className={styles.featureName}>{name}</span>
                <span className={styles.featureDesc}>{desc}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={`container ${styles.section} ${styles.lastSection}`}>
          <h2 className={styles.h2}>For engineers</h2>
          <div className={styles.engGrid}>
            {ENGINEERING.map(([name, to, desc]) => (
              <Link key={to} to={to} className={styles.engCard}>
                <span className={styles.featureName}>{name}</span>
                <span className={styles.featureDesc}>{desc}</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.syncBar}>
          <div className={`container ${styles.syncInner}`}>
            <span>Reference synced {formatDate(sync.syncedAt)} from</span>
            {Object.entries(repos).map(([name, r]) => (
              <code key={name} title={r.subject}>
                {name}@{r.sha}
              </code>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
