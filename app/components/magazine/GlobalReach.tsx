import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";
import styles from "./GlobalReach.module.css";

const stats = [
  ["09", "Markets"],
  ["05", "Direct Operations"],
  ["04", "Strategic Partnerships"],
  ["150+", "Countries in Trading Network"],
];

export default function GlobalReach() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={styles.top}>
        <SectionLabel
          number="03"
          label="The World We Operate In"
        />

        <h2>
          Built across
          <br />
          <span>borders.</span>
        </h2>

        <p>
          Direct operations and strategic partnerships connect BH
          Ventures across the Gulf, South Asia, Europe and North America.
        </p>
      </div>

      <div className={styles.mapArea}>
        <img
          src="/images/global-map.jpg"
          alt="Global business network"
          className={styles.map}
        />

        <div className={`${styles.marker} ${styles.uae}`}>
          UAE
        </div>

        <div className={`${styles.marker} ${styles.pakistan}`}>
          PK
        </div>

        <div className={`${styles.marker} ${styles.uk}`}>
          UK
        </div>

        <div className={`${styles.marker} ${styles.us}`}>
          US
        </div>

        <div className={`${styles.marker} ${styles.france}`}>
          FR
        </div>
      </div>

      <div className={styles.stats}>
        {stats.map(([value, label]) => (
          <div className={styles.stat} key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>

      <PageNumber number="04" />
    </section>
  );
}