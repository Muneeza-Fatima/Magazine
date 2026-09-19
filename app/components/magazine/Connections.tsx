import SectionLabel from "../shared/SectionLabel";
import PageNumber from "../shared/PageNumber";

import styles from "./Connections.module.css";

const NODES = [
  { name: "UAE", type: "Direct", className: "nodeOne" },
  { name: "Pakistan", type: "Direct", className: "nodeTwo" },
  { name: "United Kingdom", type: "Direct", className: "nodeThree" },
  { name: "United States", type: "Direct", className: "nodeFour" },
  { name: "France", type: "Direct", className: "nodeFive" },
  { name: "Germany", type: "Partner", className: "nodeSix" },
  { name: "Estonia", type: "Partner", className: "nodeSeven" },
  { name: "Denmark", type: "Partner", className: "nodeEight" },
  { name: "Ukraine", type: "Partner", className: "nodeNine" },
];

export default function Connections() {
  return (
    <section className={`magazinePage ${styles.page}`}>
      <div className="pageInner">
        <div className="ruleTop" />

        <div className={styles.head}>
          <SectionLabel number="07" label="Global Connections" />
        </div>

        <h2 className={styles.title}>Beyond Borders</h2>

        <p className={`copy ${styles.intro}`}>
          Direct operations in the UAE, Pakistan, the UK, the US, and France
          give BH Ventures hands-on presence in five markets. Strategic
          partnerships in Germany, Estonia, Denmark, and Ukraine extend that
          reach into Europe&rsquo;s trading and technology corridors. Together,
          they form a network built <strong>not for size, but for
          relevance</strong> — every connection chosen because it opens a door
          somewhere else.
        </p>

        <div className={styles.network}>
          <div className={`duotone ${styles.networkPhoto}`}>
            <img src="/images/connections-night.jpg" alt="City lights at night" />
          </div>

          <span className={`${styles.orbit} ${styles.orbitOne}`} />
          <span className={`${styles.orbit} ${styles.orbitTwo}`} />
          <span className={`${styles.orbit} ${styles.orbitThree}`} />

          <div className={styles.core}>
            <img
              src="/brand/bh-mark.png"
              alt=""
              aria-hidden="true"
              className={styles.coreMark}
            />
          </div>

          {NODES.map((node) => (
            <div
              key={node.name}
              className={`${styles.node} ${styles[node.className]}`}
            >
              <span
                className={
                  node.type === "Direct" ? styles.dotSolid : styles.dotHollow
                }
              />
              <span className={styles.nodeName}>{node.name}</span>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            A trading community trusted by traders across{" "}
            <em>150+ countries</em> — real opportunities, structured access,
            without requiring traders to risk their own capital.
          </p>
        </div>
      </div>

      <PageNumber number="08" />
    </section>
  );
}
