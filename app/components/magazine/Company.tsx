import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";

import styles from "./Company.module.css";

const DOMAINS = [
  "Global Trade",
  "Artificial Intelligence",
  "Web3",
  "Digital Analytics",
  "Marketing",
  "Market Intelligence",
];

export default function Company() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={`duotone ${styles.photo}`}>
        <img src="/images/company-office.jpg" alt="Corporate headquarters" />
      </div>

      <div className={styles.content}>
        <SectionLabel number="02" label="The Company" />

        <h2 className={styles.title}>
          Who
          <br />
          We Are
        </h2>

        <p className={`copy ${styles.lede}`}>
          BH Ventures FZE LLC is a UAE-based, licensed free-zone company built
          around a simple conviction: <strong>opportunity has no single
          address.</strong>
        </p>

        <p className={`copy ${styles.text}`}>
          What began as an international trading operation has grown into a
          portfolio of ventures spanning global trade, artificial intelligence,
          Web3, digital analytics, marketing, and market intelligence — unified
          not by industry, but by discipline.
        </p>

        <p className={`copy ${styles.text}`}>
          The company operates as a builder of businesses rather than a single
          business itself: identifying high-potential markets, constructing
          ventures inside them, and connecting the partnerships that let those
          ventures scale. Every division — from automobile export to AI
          consultancy — answers to the same address in Dubai.
        </p>

        <div className={styles.domains}>
          <span className={styles.domainsTitle}>Portfolio Spans</span>
          <ul className={styles.domainList}>
            {DOMAINS.map((domain) => (
              <li key={domain} className={styles.domain}>
                {domain}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={styles.statement}>
        <p className={styles.statementText}>
          Ten disciplines. <em>One standard.</em>
        </p>
      </div>

      <PageNumber number="03" />
    </section>
  );
}
