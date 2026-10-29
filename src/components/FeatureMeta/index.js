import React from "react";
import styles from "./styles.module.css";

const ROLE_LABEL = {
  STUDENT: "Student",
  COMPANY: "Recruiter",
  MENTOR: "Mentor",
  ADMIN: "Admin",
  PUBLIC: "Public",
};

export function RoleBadge({ role, children }) {
  return (
    <span className={`${styles.badge} ${styles[`role${role}`] || ""}`}>
      {children || ROLE_LABEL[role] || role}
    </span>
  );
}

/**
 * The "At a glance" box at the top of each feature guide.
 * Every prop is optional; rows render only when given.
 */
export default function FeatureMeta({ roles = [], tags = [], portal, admin, server, models, plan }) {
  const rows = [
    ["Portal screens", portal],
    ["Admin screens", admin],
    ["Server code", server],
    ["Data models", models],
    ["Plan gates", plan],
  ].filter(([, v]) => v);

  return (
    <div className={styles.wrap}>
      {(roles.length > 0 || tags.length > 0) && (
        <div className={styles.badges}>
          {roles.map((r) => (
            <RoleBadge key={r} role={r} />
          ))}
          {tags.map((t) => (
            <span key={t} className={`${styles.badge} ${styles.tag}`}>
              {t}
            </span>
          ))}
        </div>
      )}
      {rows.length > 0 && (
        <div className={styles.card}>
          <div className={styles.cardHead}>At a glance</div>
          <dl className={styles.grid}>
            {rows.map(([k, v]) => (
              <React.Fragment key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </React.Fragment>
            ))}
          </dl>
        </div>
      )}
    </div>
  );
}
