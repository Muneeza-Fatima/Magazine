import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";
import styles from "./Future.module.css";

export default function Future() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <img
        src="/images/future-dubai.jpg"
        alt="Dubai future skyline"
        className={styles.image}
      />

      <div className={styles.overlay} />

      <div className={styles.header}>
        <SectionLabel number="09" label="The Future" />
      </div>

      <div className={styles.content}>
        <p className={styles.kicker}>WHAT COMES NEXT</p>

        <h2>
          What comes next
          <br />
          is already
          <br />
          <span>being built.</span>
        </h2>

        <p>
          BH Ventures was never built to stay ten disciplines wide.
          Every venture follows the same test: does it open a market,
          sharpen a capability or strengthen a partnership?
        </p>

        <div className={styles.quote}>
          “We&apos;re not predicting the next market.
          <br />
          We&apos;re building the road to it.”
        </div>
      </div>

      <div className={styles.bottom}>
        AI · WEB3 · TRADE CORRIDORS · GLOBAL PARTNERSHIPS
      </div>

      <PageNumber number="10" />
    </section>
  );
}