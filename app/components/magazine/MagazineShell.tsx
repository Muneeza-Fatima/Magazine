import styles from "./MagazineShell.module.css";

import ExportMenu from "../shared/ExportMenu";

import Cover from "./Cover";
import Opening from "./Opening";
import Company from "./Company";
import GlobalReach from "./GlobalReach";
import Ventures from "./Ventures";
import People from "./People";
import ValueCreation from "./ValueCreation";
import Connections from "./Connections";
import Proof from "./Proof";
import Future from "./Future";
import Contact from "./Contact";

export default function MagazineShell() {
  return (
    <main className={styles.magazine}>
      <div className={`${styles.toolbar} noPrint`}>
        <ExportMenu />
      </div>

      <div className={styles.pages}>
        <Cover />
        <Opening />
        <Company />
        <GlobalReach />
        <Ventures />
        <People />
        <ValueCreation />
        <Connections />
        <Proof />
        <Future />
        <Contact />
      </div>
    </main>
  );
}
