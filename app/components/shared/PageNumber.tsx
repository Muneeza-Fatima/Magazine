import styles from "./PageNumber.module.css";

interface PageNumberProps {
  number: string;
}

export default function PageNumber({ number }: PageNumberProps) {
  return <span className={styles.number}>{number}</span>;
}