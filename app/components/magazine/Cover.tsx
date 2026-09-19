import styles from "./Cover.module.css";

export default function Cover() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <img
        src="/images/cover-dubai.jpg"
        alt="Dubai skyline"
        className={styles.image}
      />

      <div className={styles.overlay} />
      <div className={styles.glow} />

      <div className={styles.top}>
        <div className={styles.brand}>BH VENTURES</div>

        <div className={styles.meta}>
          FZE LLC · DUBAI, UAE
        </div>
      </div>

      <div className={styles.center}>
        <p className={styles.eyebrow}>
          CORPORATE MAGAZINE · 2026
        </p>

        <h1>
          Building
          <br />
          the Future
          <br />
          <span>of Ventures.</span>
        </h1>

        <p className={styles.subtitle}>
          Bridging Trade, Technology &amp; Innovation from the UAE.
        </p>
      </div>

      <div className={styles.bottom}>
        <span>TRADE</span>
        <span>TECHNOLOGY</span>
        <span>INNOVATION</span>
        <span>GLOBAL GROWTH</span>
      </div>
    </section>
  );
}