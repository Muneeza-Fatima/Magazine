import styles from "./PageNumber.module.css";

interface PageNumberProps {
  number: string;
}

export default function PageNumber({ number }: PageNumberProps) {
  return (
    <div className={styles.wrapper}>
      <span className={styles.mark}>BH Ventures FZE LLC</span>
      <span className={styles.rule} />
      <span className={styles.number}>{number}</span>
    </div>
  );
}
