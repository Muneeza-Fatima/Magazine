import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";
import styles from "./Proof.module.css";

const proof = [
  {
    value: "150+",
    label: "Countries in Trading Network",
  },
  {
    value: "09",
    label: "Markets",
  },
  {
    value: "05",
    label: "Direct Operations",
  },
  {
    value: "10",
    label: "Business Disciplines",
  },
];

export default function Proof() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={styles.header}>
        <SectionLabel number="08" label="Proof" />

        <h2>
          Not claims.
          <br />
          <span>Outcomes.</span>
        </h2>

        <p>
          Numbers mark the distance travelled. Final performance
          figures should be verified and approved before publication.
        </p>
      </div>

      <div className={styles.grid}>
        {proof.map((item) => (
          <div className={styles.item} key={item.label}>
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <span>LICENSED FREE-ZONE COMPANY</span>
        <span>UAE BASED</span>
        <span>GLOBAL NETWORK</span>
      </div>

      <PageNumber number="09" />
    </section>
  );
}