import styles from './Task.module.css';


export function Task({onClick}) {
    return (
        <div className={styles.container} onClick={onClick}>
            <div className={styles.name}>
                Название
            </div>
            <div className={styles.exp}>
                +10 Опыта
            </div>
            <div className={styles.deadline}>
                1 Января
            </div>
            <div className={styles.user}>
                <img src="/avatars/Avatar.png" alt="" className={styles.user_avatar} />
                <div className={styles.user_name}>Фокша А.С.</div>
            </div>
            <div className={styles.process}>
                <div className={styles.type_process}>В Процессе</div>
            </div>
        </div>
    )
}