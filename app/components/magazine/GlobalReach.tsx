import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";

import styles from "./GlobalReach.module.css";

const DIRECT = [
  "United Arab Emirates",
  "Pakistan",
  "United Kingdom",
  "United States",
  "France",
];

const PARTNERS = ["Germany", "Estonia", "Denmark", "Ukraine"];

const STATS = [
  ["09", "Locations"],
  ["05", "Direct Operations"],
  ["04", "Partnerships"],
  ["150+", "Countries in Network"],
];

export default function GlobalReach() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={`duotone scrimTopBottom ${styles.photo}`}>
        <img src="/images/global-earth.jpg" alt="Earth at night from orbit" />
      </div>

      <div className={styles.head}>
        <SectionLabel number="03" label="The World We Operate In" />
        <h2 className={styles.title}>Where We Operate</h2>
      </div>

      <div className={styles.body}>
        <p className={`copy ${styles.intro}`}>
          BH Ventures runs on two kinds of presence:{" "}
          <strong>direct operations</strong>, and{" "}
          <strong>strategic partnership</strong>.
        </p>

        <div className={styles.columns}>
          <div className={styles.column}>
            <div className={styles.columnHead}>
              <span className={styles.dotSolid} />
              <span className={styles.columnTitle}>Direct Operations</span>
              <span className={styles.columnCount}>05</span>
            </div>
            <ul className={styles.list}>
              {DIRECT.map((country) => (
                <li key={country} className={styles.item}>
                  {country}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.column}>
            <div className={styles.columnHead}>
              <span className={styles.dotHollow} />
              <span className={styles.columnTitle}>Strategic Partnerships</span>
              <span className={styles.columnCount}>04</span>
            </div>
            <ul className={styles.list}>
              {PARTNERS.map((country) => (
                <li key={country} className={styles.item}>
                  {country}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={`copy ${styles.note}`}>
          Add Saudi Arabia to the wider network, and the footprint stretches
          across the Gulf, South Asia, Europe, and North America — nine markets
          and growing. Beyond direct geography, the trading community reaches
          further still: a network built for traders across{" "}
          <strong>150+ countries</strong>.
        </p>

        <div className={styles.stats}>
          {STATS.map(([value, label]) => (
            <div key={label} className={styles.stat}>
              <span className={styles.statValue}>{value}</span>
              <span className={styles.statLabel}>{label}</span>
            </div>
          ))}
        </div>
      </div>

      <PageNumber number="04" />
    </section>
  );
}
