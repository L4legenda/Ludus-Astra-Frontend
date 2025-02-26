'use client'
import styles from './PanelProject.module.css'
import { useRouter, usePathname } from "next/navigation"
import { PanelContainer } from "@/components/panel/PanelContainer"

export function PanelProject() {
    const router = useRouter();
    const pathname = usePathname()
    const hasPathProjectCreate = pathname === '/dashboard/project/create';
    return (
        <PanelContainer className={styles.container}>
            <h1 className={styles.titleComponent}>Проекты</h1>
            <div className={styles.list_project}>
                <button className={styles.btnProject}>Покорение космоса</button>
            </div>
            <button
                className={`${styles.btnCreateProject} ${hasPathProjectCreate ? "activated" : ""}`}
                disabled={hasPathProjectCreate}
                onClick={() => { router.push("/dashboard/project/create") }}>
                Добавить проект
            </button>
        </PanelContainer>
    )
}