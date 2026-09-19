import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";

import styles from "./Ventures.module.css";

const FEATURED = [
  { img: "/images/trade-automobile.jpg", alt: "Automobile export", label: "Automobile Export" },
  { img: "/images/trade-logistics.jpg", alt: "Container logistics", label: "Foodstuff & Logistics" },
  { img: "/images/technology-ai.jpg", alt: "Artificial intelligence", label: "AI & Web3" },
  { img: "/images/growth-marketing.jpg", alt: "Marketing and growth", label: "Growth & Marketing" },
];

const VENTURES = [
  { no: "01", group: "Global Trade", name: "New Automobile Trading (Export)", text: "Moving vehicles out of the UAE into new markets on precision logistics." },
  { no: "02", group: "Global Trade", name: "Foodstuff Trading", text: "Import and export, connecting supply chains across borders at scale." },
  { no: "03", group: "Venture Building", name: "Web3 Venture Studio", text: "From concept to launch, for a market still being defined." },
  { no: "04", group: "Data & Insight", name: "Digital Analytics Services", text: "Dashboards and attribution that turn scattered data into decisions." },
  { no: "05", group: "Growth", name: "Marketing via Social Media", text: "Strategy and amplification for brands that need to be seen." },
  { no: "06", group: "Growth", name: "Advertising", text: "Campaign strategy and execution built for reach and recall." },
  { no: "07", group: "Growth", name: "Marketing Management", text: "Strategy and growth, managed end to end." },
  { no: "08", group: "Innovation", name: "AI Research & Consultancies", text: "Exploring where artificial intelligence actually creates value." },
  { no: "09", group: "Assessment", name: "Surveying & Evaluating", text: "Ground-truth services that inform decisions before capital moves." },
  { no: "10", group: "Experience", name: "Exhibition Organizing", text: "From concept to on-site execution, where business happens in person." },
];

export default function Ventures() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className="pageInner">
        <div className="ruleTop" />

        <div className={styles.head}>
          <SectionLabel number="04" label="The Ventures" />
        </div>

        <h2 className={styles.title}>
          Ten Disciplines, <em>One Address.</em>
        </h2>

        <div className={styles.gallery}>
          {FEATURED.map((item) => (
            <figure key={item.label} className={styles.tile}>
              <div className={`duotone ${styles.tilePhoto}`}>
                <img src={item.img} alt={item.alt} />
              </div>
              <figcaption className={styles.tileLabel}>{item.label}</figcaption>
            </figure>
          ))}
        </div>

        <div className={styles.grid}>
          {VENTURES.map((venture) => (
            <div key={venture.no} className={styles.row}>
              <span className={styles.no}>{venture.no}</span>

              <div className={styles.rowBody}>
                <span className={styles.name}>{venture.name}</span>
                <span className={styles.text}>{venture.text}</span>
              </div>

              <span className={styles.group}>{venture.group}</span>
            </div>
          ))}
        </div>

        <p className={styles.footer}>
          Trade. Web3. AI. Marketing. Ten disciplines, one address — each
          engineered to the same exacting standard.
        </p>
      </div>

      <PageNumber number="05" />
    </section>
  );
}
