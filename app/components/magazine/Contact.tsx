import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={styles.top}>
        <SectionLabel number="10" label="Let's Build" />
      </div>

      <div className={styles.center}>
        <p className={styles.kicker}>THE NEXT CONVERSATION</p>

        <h1>
          Let&apos;s
          <br />
          <span>Build.</span>
        </h1>

        <p className={styles.description}>
          Every venture begins with a conversation. If there&apos;s a
          market you&apos;re trying to enter, a business you&apos;re trying
          to build, or a partnership you&apos;re trying to form —
          this is where it starts.
        </p>

        <div className={styles.contact}>
          <strong>BH Ventures FZE LLC</strong>
          <span>Dubai, United Arab Emirates</span>
          <a href="mailto:info@bhventures.ae">
            info@bhventures.ae
          </a>
        </div>
      </div>

      <div className={styles.bottom}>
        <div>BH VENTURES</div>

        <span>
          Building opportunities. Creating global impact.
        </span>

        <div>FZE LLC · DUBAI, UAE</div>
      </div>

      <PageNumber number="11" />
    </section>
  );
}