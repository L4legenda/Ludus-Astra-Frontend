import styles from "./PanelContainer.module.css";

export function SubPanelContainer({ children, className="" }) {
    return (
        <div className={`${styles.container} ${styles.sub_container} ${className}`}>
            {children}

        </div>

    )
}