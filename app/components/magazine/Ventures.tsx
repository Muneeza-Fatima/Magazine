import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";
import styles from "./Ventures.module.css";

const ventures = [
  {
    number: "01",
    category: "GLOBAL TRADE",
    title: "New Automobile Trading",
    text: "Moving vehicles from the UAE into new markets through structured export channels and trusted logistics.",
    image: "/images/trade-automobile.jpg",
  },
  {
    number: "02",
    category: "GLOBAL TRADE",
    title: "Foodstuff Trading",
    text: "Connecting food supply chains across borders with reliability and scale.",
    image: "/images/trade-logistics.jpg",
  },
  {
    number: "03",
    category: "INNOVATION",
    title: "AI & Web3",
    text: "Researching, designing and building digital ventures for emerging markets.",
    image: "/images/technology-ai.jpg",
  },
  {
    number: "04",
    category: "GROWTH",
    title: "Marketing & Advertising",
    text: "Creating strategic growth systems for brands that need to be seen, understood and remembered.",
    image: "/images/growth-marketing.jpg",
  },
];

export default function Ventures() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className={styles.header}>
        <SectionLabel number="04" label="The Ventures" />

        <div>
          <p className={styles.kicker}>
            TEN DISCIPLINES · ONE ADDRESS
          </p>

          <h2>
            A portfolio built
            <br />
            around <span>opportunity.</span>
          </h2>
        </div>
      </div>

      <div className={styles.grid}>
        {ventures.map((venture) => (
          <article className={styles.card} key={venture.number}>
            <img src={venture.image} alt={venture.title} />

            <div className={styles.cardOverlay} />

            <div className={styles.number}>
              {venture.number}
            </div>

            <div className={styles.cardContent}>
              <p>{venture.category}</p>
              <h3>{venture.title}</h3>
              <span>{venture.text}</span>
            </div>
          </article>
        ))}
      </div>

      <div className={styles.footerStatement}>
        Trade. Web3. AI. Marketing. Nine services, one address —
        each engineered to the same exacting standard.
      </div>

      <PageNumber number="05" />
    </section>
  );
}