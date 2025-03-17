"use client";
import styles from "./header.module.css"
import { PanelContainer } from "@/components/panel/PanelContainer"
import { ProgressBar } from "@/components/ProgressBar/ProgressBar"
import { useEffect, useState } from "react"
import { fetchAuthMe } from "@/api/auth";
import { URL_HOST } from "@/api/base";
import { redirect } from "next/navigation";
import { get_current_exp_lvl, get_level, get_max_exp_lvl } from '@/utils/level';


export function Header() {
    const [user, setUser] = useState({});

    const handleFetchMe = async () => {
        const response = await fetchAuthMe();
        setUser(response);
    }

    const handleExit = () => {
        localStorage.clear("token");
        redirect("/")
    }

    useEffect(() => {
        handleFetchMe()
    }, [])

    return (
        <PanelContainer>
            <div className={styles.container}>
                {user?.profilePictureUrl && (
                    <img src={URL_HOST + user?.profilePictureUrl} alt="" className={styles.avatar} />
                )}
                {!user?.profilePictureUrl && (
                    <img src="/question-mark.jpg" alt="" className={styles.avatar} />
                )}
                <div className={styles.column}>
                    <div className={styles.row}>
                        <div className={styles.fullname}>{user?.fullName}</div>
                            <div className={styles.level}>Уровень: {get_level(user?.exp)}</div>
                    </div>

                    <ProgressBar progress={get_current_exp_lvl(user?.exp, get_level(user?.exp))} maxProgress={get_max_exp_lvl(get_level(user?.exp))} style={{ minWidth: '400px' }} />
                </div>
                <div className="void-horizontal"></div>
                <div className={styles.column}>
                    <button onClick={handleExit}>Выход</button>
                </div>
            </div>
        </PanelContainer>
    )
}