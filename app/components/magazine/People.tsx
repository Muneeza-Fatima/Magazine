import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";

import styles from "./People.module.css";

/* Portraits, names and bios are supplied by the client. The frames below are
   laid out to receive them; no stand-in faces are used, because a stock
   portrait presented as this company's leadership would be a fabrication. */
const LEADERS = [
  { slot: "I", role: "Founder & Chief Executive" },
  { slot: "II", role: "Director, Global Trade" },
];

export default function People() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={`duotone scrimTopBottom ${styles.photo}`}>
        <img src="/images/people-team.jpg" alt="The BH Ventures workspace" />
      </div>

      <div className={styles.head}>
        <SectionLabel number="05" label="The People Behind the Vision" />
        <h2 className={styles.title}>
          The People
          <br />
          Behind the Vision
        </h2>
      </div>

      <div className={styles.body}>
        <p className={`copy ${styles.intro}`}>
          Behind every venture is a decision made by someone who chose to build
          rather than wait. BH Ventures is run by a small team of operators —
          traders, technologists, and market builders — who treat every new
          market the way an architect treats a blank site:{" "}
          <strong>with respect for what&rsquo;s already there, and a plan for
          what isn&rsquo;t yet.</strong>
        </p>

        <div className={styles.grid}>
          {LEADERS.map((leader) => (
            <article key={leader.slot} className={styles.card}>
              <div className={styles.portrait}>
                <img
                  src="/brand/bh-mark.png"
                  alt=""
                  aria-hidden="true"
                  className={styles.portraitMark}
                />
                <span className={styles.portraitIndex}>{leader.slot}</span>
              </div>

              <div className={styles.meta}>
                <span className={styles.role}>{leader.role}</span>
                <span className={styles.nameRule} />
              </div>
            </article>
          ))}
        </div>

        <div className={styles.quoteBlock}>
          <span className={styles.quoteMark}>&ldquo;</span>
          <p className={styles.quote}>
            We don&rsquo;t enter markets. <em>We build inside them.</em>
          </p>
        </div>
      </div>

      <PageNumber number="06" />
    </section>
  );
}
