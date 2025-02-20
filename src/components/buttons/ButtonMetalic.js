import styles from "./ButtonCosmic.module.css";

export default function ButtonMetalic({ children }) {
    return (
        <button className={`${styles["premium-btn"]} ${styles["metallic-btn"]}`}>
            <span className={styles["btn-content"]}>
                {children}
            </span>
            <span className={styles["btn-stars"]}></span>
            <span className={styles["btn-particles"]}></span>
        </button>
    );
}