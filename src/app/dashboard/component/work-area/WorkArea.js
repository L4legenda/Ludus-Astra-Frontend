"use client"
import { useState, useEffect } from 'react'
import { useRouter, usePathname  } from "next/navigation"
import styles from './WorkArea.module.css'
import { PanelContainer } from '@/components/panel/PanelContainer'

export function WorkArea({ children }) {
    const router = useRouter()
    const pathname = usePathname()

    const [active, setActive] = useState(pathname !== '/dashboard')

    useEffect(() => {
        if (pathname) {
            setActive(pathname !== '/dashboard')
        }
    }, [pathname])

    return (
        <div className={styles.base_container} >
            <PanelContainer className={`${styles.container} ${active ? styles.activated : styles.collapsed}`}>
                <div className={`${styles.info} ${active ? styles.activated : styles.collapsed}`}>
                    <span onClick={() => setActive(!active)}>Рабочая область</span>
                </div>
                {children}
            </PanelContainer>
        </div>
    )
}