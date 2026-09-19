import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";

import styles from "./Opening.module.css";

export default function Opening() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={`duotone scrimTopBottom ${styles.photo}`}>
        <img src="/images/opening-dubai.jpg" alt="Dubai business district" />
      </div>

      <div className={styles.label}>
        <SectionLabel number="01" label="The Opening" />
      </div>

      <div className={styles.body}>
        <h2 className={styles.title}>
          Building the Future
          <br />
          of Ventures.
        </h2>

        <p className={styles.standfirst}>
          Bridging Trade, Technology &amp; Innovation from the UAE.
        </p>

        <div className={styles.columns}>
          <p className="copy">
            From a single address in Dubai, BH Ventures moves cars, cargo, code,
            and capital across nine countries and counting. It is not one
            business — it is <strong>ten disciplines operating on one
            standard</strong>, built by a licensed free-zone company that treats
            ambition as infrastructure, not inspiration.
          </p>

          <div className={styles.quote}>
            <span className={styles.quoteBar} />
            <p className="pullQuote">
              Where trade meets technology, and ambition becomes architecture.
            </p>
          </div>
        </div>
      </div>

      <PageNumber number="02" />
    </section>
  );
}
