import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";

import styles from "./Future.module.css";

export default function Future() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={`duotone scrimFull ${styles.photo}`}>
        <img src="/images/future-dubai.jpg" alt="Dubai at dusk" />
      </div>

      <div className="pageInner">
        <div className="ruleTop" />

        <div className={styles.head}>
          <SectionLabel number="09" label="The Future" />
        </div>

        <h2 className={styles.title}>What Comes Next</h2>

        <div className={styles.body}>
          <p className="copy">
            BH Ventures was never built to stay ten disciplines wide. Every
            venture added has followed the same test: <strong>does it open a
            market, sharpen a capability, or strengthen a partnership?</strong>{" "}
            The ones that pass, stay.
          </p>

          <p className="copy">
            What&rsquo;s next is more of the same discipline, applied further —
            deeper AI and Web3 capability, new trade corridors, and partnerships
            in markets not yet on the map. The company isn&rsquo;t forecasting
            where global business is headed. It&rsquo;s building the
            infrastructure to be there first.
          </p>
        </div>

        <div className={styles.quoteBlock}>
          <span className={styles.quoteRule} />
          <p className={styles.quote}>
            We&rsquo;re not predicting the next market.
            <br />
            <em>We&rsquo;re building the road to it.</em>
          </p>
        </div>
      </div>

      <PageNumber number="10" />
    </section>
  );
}
