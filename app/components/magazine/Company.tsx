import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";
import styles from "./Company.module.css";

export default function Company() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={styles.top}>
        <SectionLabel number="02" label="The Company" />
      </div>

      <div className={styles.grid}>
        <div className={styles.visual}>
          <img
            src="/images/company-office.jpg"
            alt="Premium corporate environment"
          />

          <div className={styles.imageCaption}>
            DUBAI · UNITED ARAB EMIRATES
          </div>
        </div>

        <div className={styles.copy}>
          <p className={styles.smallTitle}>WHO WE ARE</p>

          <h2>
            One company.
            <br />
            Multiple disciplines.
            <br />
            <span>One standard.</span>
          </h2>

          <p>
            BH Ventures FZE LLC is a UAE-based, licensed free-zone
            company built around a simple conviction: opportunity has no
            single address.
          </p>

          <p>
            What began as an international trading operation has
            expanded into a portfolio spanning global trade, artificial
            intelligence, Web3, digital analytics, marketing and market
            intelligence.
          </p>

          <div className={styles.quote}>
            “We build businesses around opportunity — and connect
            the partnerships that allow them to scale.”
          </div>
        </div>
      </div>

      <PageNumber number="03" />
    </section>
  );
}