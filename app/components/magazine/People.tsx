import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";
import styles from "./People.module.css";

const leaders = [
  {
    name: "Leadership",
    role: "BH Ventures",
    image: "/images/leadership-01.jpg",
    quote:
      "We don't simply enter markets. We build with the people and capabilities already inside them.",
  },
  {
    name: "Leadership",
    role: "BH Ventures",
    image: "/images/leadership-02.jpg",
    quote:
      "Every venture begins with a decision: identify the opportunity, build the infrastructure and create the connection.",
  },
];

export default function People() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={styles.header}>
        <SectionLabel
          number="05"
          label="The People Behind the Vision"
        />

        <h2>
          People who
          <br />
          <span>build.</span>
        </h2>
      </div>

      <div className={styles.grid}>
        {leaders.map((leader, index) => (
          <article className={styles.person} key={index}>
            <img src={leader.image} alt={leader.name} />

            <div className={styles.overlay} />

            <div className={styles.personInfo}>
              <p>{leader.role}</p>
              <h3>{leader.name}</h3>

              <blockquote>“{leader.quote}”</blockquote>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.note}>
        Leadership names, biographies and final portrait photography
        should be supplied and approved by the client before publication.
      </div>

      <PageNumber number="06" />
    </section>
  );
}