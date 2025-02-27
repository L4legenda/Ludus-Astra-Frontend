
import styles from './Member.module.css';
import { LvlNum } from '../Level/LvlNum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

export function Member({ avatar="/avatars/Avatar.png", lvl = 1 }){
    return (
        <div className={styles.container}>
            <img src="/avatars/Avatar.png" alt="" className={styles.avatar} />
            <div className={styles.lvl}><LvlNum lvl={lvl} /></div>
            <div className={styles.close}>
                <FontAwesomeIcon icon={faClose} />

            </div>
        </div>
    )
}