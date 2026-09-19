import SectionLabel from "../shared/SectionLabel";

import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={`duotone scrimFull ${styles.photo}`}>
        <img src="/images/closing-dubai.jpg" alt="Dubai coastline" />
      </div>

      <div className={styles.frame}>
        <span className={styles.cornerTL} />
        <span className={styles.cornerTR} />
        <span className={styles.cornerBL} />
        <span className={styles.cornerBR} />
      </div>

      <div className="pageInner">
        <div className="ruleTop" />

        <div className={styles.head}>
          <SectionLabel number="10" label="Let's Build" />
        </div>

        <div className={styles.center}>
          <h2 className={styles.title}>
            Let&rsquo;s <em>Build.</em>
          </h2>

          <p className={styles.lede}>
            Every venture on these pages started as a conversation. If
            there&rsquo;s a market you&rsquo;re trying to enter, a business
            you&rsquo;re trying to build, or a partnership you&rsquo;re trying
            to form — this is where it starts.
          </p>

          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerDot} />
            <span className={styles.dividerLine} />
          </div>

          <div className={styles.details}>
            <span className={styles.company}>BH Ventures FZE LLC</span>
            <span className={styles.place}>Dubai, United Arab Emirates</span>
            <a href="mailto:info@bhventures.ae" className={styles.email}>
              info@bhventures.ae
            </a>
          </div>
        </div>

        <footer className={styles.bottom}>
          <img
            src="/brand/bh-lockup.png"
            alt="BH Ventures FZE LLC"
            className={styles.logo}
          />

          <p className={styles.sign}>
            Building opportunities. <em>Creating global impact.</em>
          </p>

          <div className={styles.footRule} />

          <div className={styles.footRow}>
            <span className={styles.footItem}>Trade</span>
            <span className={styles.footSep} />
            <span className={styles.footItem}>Technology</span>
            <span className={styles.footSep} />
            <span className={styles.footItem}>Innovation</span>
          </div>
        </footer>
      </div>
    </section>
  );
}
