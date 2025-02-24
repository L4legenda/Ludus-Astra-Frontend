import styles from "./BgCosmic.module.css";

export function BgCosmic({children}) {
    return (
        <div className={styles.container}>
            <div className={styles.sky_stars}>
                <div className={styles.stars}></div>
                <div className={styles.stars2}></div>
                <div className={styles.stars3}></div>
            </div>
            {children}
        </div>

    )
}