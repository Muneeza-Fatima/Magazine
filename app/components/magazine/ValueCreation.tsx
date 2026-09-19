import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";

import styles from "./ValueCreation.module.css";

const PILLARS = [
  {
    no: "01",
    name: "Strategic Market Expansion",
    text: "Identifying high-potential markets before they're obvious, and building the on-ramps into them.",
  },
  {
    no: "02",
    name: "Diversified Business Ventures",
    text: "Constructing and supporting businesses across trading, technology, digital solutions, and emerging industries — so growth in one discipline strengthens the others.",
  },
  {
    no: "03",
    name: "Technology-Driven Innovation",
    text: "Applying AI, Web3, and modern digital infrastructure not as buzzwords, but as working tools inside every venture.",
  },
  {
    no: "04",
    name: "Trusted Global Partnerships",
    text: "Treating every partner relationship as long-term infrastructure, not a transaction.",
  },
];

export default function ValueCreation() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className="pageInner">
        <div className="ruleTop" />

        <div className={styles.head}>
          <SectionLabel number="06" label="The Way We Create Value" />
        </div>

        <h2 className={styles.title}>Built for Global Growth</h2>

        <p className={`copy ${styles.intro}`}>
          BH Ventures creates value through four disciplines, applied
          consistently across every venture.
        </p>

        <div className={styles.list}>
          {PILLARS.map((pillar) => (
            <article key={pillar.no} className={styles.row}>
              <span className={styles.no}>{pillar.no}</span>

              <div className={styles.rowBody}>
                <h3 className={styles.name}>{pillar.name}</h3>
                <p className={styles.text}>{pillar.text}</p>
              </div>
            </article>
          ))}
        </div>

        <p className={styles.footer}>
          This is not diversification for its own sake — it&rsquo;s{" "}
          <em>a single operating model</em>, applied to ten different
          disciplines.
        </p>
      </div>

      <PageNumber number="07" />
    </section>
  );
}
