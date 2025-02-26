import styles from "./PanelContainer.module.css";

export function PanelContainer({ children, className="" }) {
    return (
        <div className={`${styles.container} ${className}`}>
            {children}

        </div>

    )
}