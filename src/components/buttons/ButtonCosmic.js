import styles from "./ButtonCosmic.module.css";

export default function ButtonCosmic({children}) {
  return (
    <button className={`${styles["premium-btn"]} ${styles["cosmic-btn"]}`}>
      <span className={styles["btn-content"]}>
        {children}
      </span>
      <span className={styles["btn-stars"]}></span>
      <span className={styles["btn-particles"]}></span>
    </button>
  );
}