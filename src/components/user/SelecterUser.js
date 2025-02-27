import styles from './SelecterUser.module.css';
import { SubPanelContainer } from '../panel/SubPanelContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Member } from '../member/Member';


export function SelecterUser() {
    return (
        <div className={styles.baseContainer}>
            <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
            <div>
                <h1 className={styles.titleComponent}>Добавление пользователя</h1>
                <SubPanelContainer className={styles.container}>

                    <div className={styles.row}>
                        <input type="search" placeholder='Поиск' className={styles.input_search} />
                        <div className={styles.btn_close}>
                            <FontAwesomeIcon icon={faClose} className={styles.icon_close} />
                        </div>
                    </div>
                    <div className={styles.members_list}>
                        <div className={styles.sub_title}>Свободные</div>
                        <div className={styles.members_flex}>
                            <Member />
                            <Member />
                        </div>

                        <div className={styles.sub_title}>Скоро освободятся</div>
                        <div className={styles.members_flex}>
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                        </div>
                        <div className={styles.line_dashed}></div>
                        <div className={styles.members_flex}>
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                            <Member />
                        </div>

                    </div>
                    <button>Добавить</button>
                </SubPanelContainer>
            </div>

        </div>
    )
}