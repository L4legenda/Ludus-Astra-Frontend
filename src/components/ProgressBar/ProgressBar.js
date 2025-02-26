import styles from './ProgressBar.module.css';

export const ProgressBar = ({ progress, maxProgress, style }) => {
    const procent = (progress / maxProgress) * 100
    return (
        <div className={styles['progress-bar-container']}>
            <div className={`${styles['progress-bar-child']} ${styles['progress']}`}></div>
            <div className={`${styles["progress-bar-child"]} ${styles['shrinker']}`}
                style={{ width: `${100 - procent}%` }}></div>
            <div className={styles.progressText}>
                {progress}/{maxProgress}
            </div>
        </div>
    )

};