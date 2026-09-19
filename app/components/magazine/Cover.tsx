import styles from "./Cover.module.css";

export default function Cover() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={`duotone duotoneBright scrimFull ${styles.photo}`}>
        <img src="/images/cover-dubai.jpg" alt="Dubai skyline at dusk" />
      </div>

      <div className={styles.frame}>
        <span className={styles.cornerTL} />
        <span className={styles.cornerTR} />
        <span className={styles.cornerBL} />
        <span className={styles.cornerBR} />
      </div>

      <header className={styles.top}>
        <span className={styles.edition}>Corporate Magazine</span>
        <span className={styles.year}>MMXXVI</span>
      </header>

      <div className={styles.center}>
        <img
          src="/brand/bh-lockup.png"
          alt="BH Ventures FZE LLC"
          className={styles.logo}
        />

        <div className={styles.divider}>
          <span className={styles.dividerLine} />
          <span className={styles.dividerDot} />
          <span className={styles.dividerLine} />
        </div>

        <p className={styles.locale}>FZE LLC · Dubai, United Arab Emirates</p>

        <h1 className={styles.title}>
          Building the
          <br />
          <em>Future</em> of Ventures.
        </h1>

        <p className={styles.subtitle}>
          Bridging Trade, Technology &amp; Innovation from the UAE.
        </p>
      </div>

      <footer className={styles.bottom}>
        <div className={styles.footRule} />
        <div className={styles.footRow}>
          <span className={styles.footItem}>Ten Disciplines</span>
          <span className={styles.footSep} />
          <span className={styles.footItem}>Nine Markets</span>
          <span className={styles.footSep} />
          <span className={styles.footItem}>One Standard</span>
        </div>
      </footer>
    </section>
  );
}
