import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";
import styles from "./Opening.module.css";

export default function Opening() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={styles.backgroundText}>BH</div>

      <div className={styles.header}>
        <SectionLabel number="01" label="The Opening" />
      </div>

      <div className={styles.layout}>
        <div className={styles.content}>
          <p className={styles.kicker}>
            BUILDING THE FUTURE OF VENTURES
          </p>

          <h2>
            Where trade meets
            <br />
            technology,
            <br />
            <span>and ambition becomes architecture.</span>
          </h2>

          <p className={styles.body}>
            From a single address in Dubai, BH Ventures connects
            trade, technology, innovation and growth across international
            markets. It is not one business — it is a portfolio of
            disciplines operating on one standard.
          </p>
        </div>

        <div className={styles.visual}>
          <img
            src="/images/opening-dubai.jpg"
            alt="Dubai architecture"
          />

          <div className={styles.visualTag}>
            DUBAI · UAE
          </div>
        </div>
      </div>

      <PageNumber number="02" />
    </section>
  );
}