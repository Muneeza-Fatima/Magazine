import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";
import styles from "./Connections.module.css";

const regions = [
  ["UAE", "Direct Operations"],
  ["Pakistan", "Direct Operations"],
  ["United Kingdom", "Direct Operations"],
  ["United States", "Direct Operations"],
  ["France", "Direct Operations"],
  ["Germany", "Strategic Partnership"],
  ["Estonia", "Strategic Partnership"],
  ["Denmark", "Strategic Partnership"],
  ["Ukraine", "Strategic Partnership"],
];

export default function Connections() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={styles.left}>
        <SectionLabel number="07" label="Global Connections" />

        <h2>
          Beyond
          <br />
          <span>borders.</span>
        </h2>

        <p>
          Direct operations and strategic partnerships create a
          network built not simply for size, but for relevance.
        </p>

        <div className={styles.statement}>
          A trading community designed for a global market —
          structured access, real opportunities and international
          reach.
        </div>
      </div>

      <div className={styles.network}>
        <div className={`${styles.orbit} ${styles.orbitOne}`} />
        <div className={`${styles.orbit} ${styles.orbitTwo}`} />
        <div className={styles.core}>BH</div>

        {regions.map(([name, type], index) => (
          <div
            key={name}
            className={`${styles.location} ${styles[`location${index}`]}`}
          >
            <span className={styles.dot} />
            <div>
              <strong>{name}</strong>
              <small>{type}</small>
            </div>
          </div>
        ))}
      </div>

      <PageNumber number="08" />
    </section>
  );
}