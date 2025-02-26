import styles from './MemberList.module.css';
import { Member } from './Member';
export function MemberList(){
    return (
        <div className={styles.container}>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
            <Member/>
        </div>
    )

}