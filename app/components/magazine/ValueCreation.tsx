import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";
import styles from "./ValueCreation.module.css";

const principles = [
  {
    number: "01",
    title: "Strategic Market Expansion",
    text: "Identifying high-potential markets and building the on-ramps into them.",
  },
  {
    number: "02",
    title: "Diversified Business Ventures",
    text: "Constructing businesses across trading, technology, digital solutions and emerging industries.",
  },
  {
    number: "03",
    title: "Technology-Driven Innovation",
    text: "Applying AI, Web3 and modern digital infrastructure as working tools.",
  },
  {
    number: "04",
    title: "Trusted Global Partnerships",
    text: "Treating relationships as long-term infrastructure rather than transactions.",
  },
];

export default function ValueCreation() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={styles.header}>
        <SectionLabel
          number="06"
          label="The Way We Create Value"
        />

        <h2>
          Built for
          <br />
          <span>global growth.</span>
        </h2>
      </div>

      <div className={styles.centerMark}>BH</div>

      <div className={styles.grid}>
        {principles.map((item) => (
          <article className={styles.item} key={item.number}>
            <span className={styles.number}>{item.number}</span>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <p className={styles.statement}>
        This is not diversification for its own sake — it is a
        single operating model, applied across different disciplines.
      </p>

      <PageNumber number="07" />
    </section>
  );
}