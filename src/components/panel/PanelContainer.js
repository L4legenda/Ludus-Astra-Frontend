import styles from "./PanelContainer.module.css";

export function PanelContainer({ children }) {
    return (
        <div className={styles.container}>
            {children}

        </div>

    )
}