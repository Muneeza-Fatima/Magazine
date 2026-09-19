import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";

import styles from "./Proof.module.css";

/* Confirmed figures. */
const CONFIRMED = [
  { value: "09", label: "Markets", note: "Gulf · South Asia · Europe · N. America" },
  { value: "05", label: "Direct Operations", note: "Wholly operated by BH Ventures" },
  { value: "10", label: "Active Ventures", note: "Under one licensed roof" },
  { value: "150+", label: "Countries in Network", note: "Trading community reach" },
];

/* Trading-community metrics — awaiting confirmed figures from the client. */
const PENDING = [
  "Countries Registered",
  "Average Payout Processing",
  "Paid Out to Traders",
  "Traders Worldwide",
];

export default function Proof() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className="pageInner">
        <div className="ruleTop" />

        <div className={styles.head}>
          <SectionLabel number="08" label="Proof" />
        </div>

        <h2 className={styles.title}>
          Not Claims.
          <br />
          <em>Outcomes.</em>
        </h2>

        <p className={`copy ${styles.intro}`}>
          Numbers rarely tell the whole story, but they mark the distance
          travelled. A licensed free-zone company. Nine markets, five of them
          direct. Ten active ventures under one roof. A trading network built
          for a global community, not a local one.
        </p>

        <div className={styles.grid}>
          {CONFIRMED.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <span className={styles.value}>{stat.value}</span>
              <span className={styles.label}>{stat.label}</span>
              <span className={styles.note}>{stat.note}</span>
            </div>
          ))}
        </div>

        <div className={styles.pending}>
          <div className={styles.pendingHead}>
            <span className={styles.pendingTitle}>Trading Community</span>
            <span className={styles.pendingRule} />
          </div>

          <div className={styles.pendingGrid}>
            {PENDING.map((label) => (
              <div key={label} className={styles.pendingItem}>
                <span className={styles.pendingSlot} />
                <span className={styles.pendingLabel}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <p className={styles.footer}>
          Every number here is a marker, <em>not a ceiling.</em>
        </p>
      </div>

      <PageNumber number="09" />
    </section>
  );
}
