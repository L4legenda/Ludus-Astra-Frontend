import styles from './MemberList.module.css';
import { Member } from './Member';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export function MemberList({ listMembers = [], onDelete, onAddMember }) {
    const handleAddMember = () => {
        onAddMember()
    }
    return (
        <div className={styles.container}>

            {listMembers.map((v, i) => <Member key={i} lvl={100} onDelete={()=>onDelete(i)} />)}


            <button type="button" className={styles.btnAdd} onClick={() => handleAddMember()}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )

}