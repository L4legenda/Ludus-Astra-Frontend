import styles from "./header.module.css"
import { PanelContainer } from "@/components/panel/PanelContainer"
import { ProgressBar } from "@/components/ProgressBar/ProgressBar"

export function Header() {
    return (
        <PanelContainer>
            <div className={styles.container}>
                <img src="/avatars/Avatar.png" alt="" className={styles.avatar} />
                <div className={styles.column}>
                    <div className={styles.row}>
                        <div className={styles.fullname}>Фокша Александр Сергеевич</div>
                        <div className={styles.level}>Уровень: 1</div>
                    </div>

                    <ProgressBar progress={50} maxProgress={200} style={{ minWidth: '400px' }} />
                </div>
                <div className="void-horizontal"></div>
                <div className={styles.column}>
                    <button>Выход</button>
                </div>
            </div>
        </PanelContainer>
    )
}