import styles from './MemberList.module.css';
import { Member } from './Member';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { get_level } from '@/utils/level';
import { URL_HOST } from '@/api/base';

export function MemberList({ listMembers = [], onDelete, onAddMember }) {
    const handleAddMember = () => {
        onAddMember()
    }
    return (
        <div className={styles.container}>

            {listMembers.map((v, i) => <Member avatar={URL_HOST + v?.profilePictureUrl} key={i} lvl={get_level(v?.exp)} onDelete={()=>onDelete(i)} />)}


            <button type="button" className={styles.btnAdd} onClick={() => handleAddMember()}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    )

}