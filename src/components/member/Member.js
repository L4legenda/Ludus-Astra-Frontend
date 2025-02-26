
import styles from './Member.module.css';
export function Member(){
    return (
        <div className={styles.container}>
            <img src="/avatars/Avatar.png" alt="" className={styles.avatar} />
        </div>
    )
}