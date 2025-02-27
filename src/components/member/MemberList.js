import styles from './MemberList.module.css';
import { Member } from './Member';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export function MemberList() {
    return (
        <div className={styles.container}>
            <Member lvl={100} />
            <Member lvl={60} />
            <Member lvl={55} />
            <Member lvl={10} />
            <Member lvl={1} />
            <button type="button" className={styles.btnAdd}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )

}