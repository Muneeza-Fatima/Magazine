import styles from "./SectionLabel.module.css";

interface SectionLabelProps {
  number: string;
  label: string;
}

export default function SectionLabel({
  number,
  label,
}: SectionLabelProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.number}>{number}</span>
      <span className={styles.line} />
      <span className={styles.label}>{label}</span>
    </div>
  );
}