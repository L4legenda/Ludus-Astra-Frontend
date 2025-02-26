import styles from './PanelProject.module.css'
import { PanelContainer } from "@/components/panel/PanelContainer"

export function PanelProject() {
    return (
        <PanelContainer className={styles.container}>
            <h1 className={styles.titleComponent}>Проекты</h1>
            <div className={styles.list_project}>
                <button className={styles.btnProject}>Покорение космоса</button>
            </div>
            <button className={styles.btnCreateProject}>Добавить проект</button>
        </PanelContainer>
    )
}