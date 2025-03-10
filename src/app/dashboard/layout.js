"use client"
import styles from "./page.module.css";
import { BgCosmic } from "@/components/cosmic/BgCosmic"
import { Header } from "./component/header/header";
import { PanelProject } from "./component/panel-project/PanelProject";
import { WorkArea } from "./component/work-area/WorkArea";
import { useEffect } from "react";
import { fetchAuthCheck } from "@/api/auth";
import { redirect } from "next/navigation";

export default function Dashboard({ children }) {

    const handleCheckAuth = async () => {
        try {
            await fetchAuthCheck()
        } catch (e) {
            redirect("/signin")
        }
    }
    useEffect(() => {
        handleCheckAuth()
    }, [])
    return (
        <BgCosmic>
            <main className={styles.main}>
                <Header />
                <div className={styles.area_work}>
                    <WorkArea>{children}</WorkArea>
                    <PanelProject></PanelProject>
                </div>
            </main>
        </BgCosmic>
    )
}