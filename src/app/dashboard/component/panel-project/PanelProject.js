'use client'
import styles from './PanelProject.module.css'
import { useRouter, usePathname, redirect } from "next/navigation"
import { PanelContainer } from "@/components/panel/PanelContainer"
import { useEffect, useState } from 'react';
import { fetchGetProjects } from '@/api/project';

export function PanelProject() {
    const router = useRouter();
    const pathname = usePathname()
    const hasPathProjectCreate = pathname === '/dashboard/project/create';


    const [projects, setProject] = useState([]);

    const handleClickProject = (v) => {
        console.log(v);
        redirect(`/dashboard/project/${v.id}`)
    }

    const handleGetProjects = async () => {
        try {
            const _projects = await fetchGetProjects();
            if (projects.length != _projects.length) {
                setProject(_projects);
            }

        } catch (error) {
            console.log(error);
        }

    }
    useEffect(() => {
        handleGetProjects()
    })

    return (
        <PanelContainer className={styles.container}>
            <h1 className={styles.titleComponent}>Проекты</h1>
            <div className={styles.list_project}>
                {projects.map((v, i) => (
                    <button
                        key={i}
                        onClick={()=>handleClickProject(v)}
                        className={`${styles.btnProject} ${pathname === '/dashboard/project/'+v.id ? "activated" : ''}`}>
                        {v.name}
                    </button>
                ))}

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