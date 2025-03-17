
import styles from './Member.module.css';
import { LvlNum } from '../Level/LvlNum';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { get_level } from '@/utils/level';

export function Member({ avatar = "/avatars/Avatar.png", lvl = 1, onDelete, user = {} }) {
    const [isSelected, setIsSelected] = useState(user?.selected)

    const handleSelected = () => {
        setIsSelected(!isSelected)
        user.selected = !isSelected
    }

    return (
        <div
            className={`${styles.container} ${isSelected ? styles.selected : ''}`}
            onClick={() => handleSelected()}>
            <img src={avatar} alt="" className={styles.avatar} />
            <div className={styles.lvl}><LvlNum lvl={lvl} /></div>
            {onDelete && (<div className={styles.close} onClick={()=>onDelete()}>
                <FontAwesomeIcon icon={faClose} />
            </div>)}

        </div>
    )
}