"use client"
import styles from './SelecterUser.module.css';
import { SubPanelContainer } from '../panel/SubPanelContainer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { Member } from '../member/Member';
import { useEffect, useState } from 'react';
import { fetchSearch } from '@/api/user';
import { get_level } from '@/utils/level';
import { URL_HOST } from '@/api/base';

export function SelecterUser({ visible, onClose, onSelectedUsers, ignoreMembers, isRightArrow=false }) {

    const [inputSearch, setInputSearch] = useState("")

    const [freeUsers, setFreeUsers] = useState([]);
    const [soonFreeUsers, setSoonFreeUsers] = useState([]);
    const [busyUsers, setBusyUsers] = useState([]);


    const handleSearchUser = async () => {
        const res = await fetchSearch({ name: inputSearch })

        const _free = res.freeUsers.filter(user =>
            !ignoreMembers.some(ignored => ignored.id === user.id)
        );
        const _soonFree = res.soonFreeUsers.filter(user =>
            !ignoreMembers.some(ignored => ignored.id === user.id)
        );
        const _busy = res.busyUsers.filter(user =>
            !ignoreMembers.some(ignored => ignored.id === user.id)
        );


        setFreeUsers(_free.map((v, i) => ({ ...v, selected: false })))
        setSoonFreeUsers(_soonFree.map((v, i) => ({ ...v, selected: false })))
        setBusyUsers(_busy.map((v, i) => ({ ...v, selected: false })))
    }

    const visibleFreeUsers = freeUsers.length > 0
    const visibleSoonFreeUsers = soonFreeUsers.length > 0
    const visibleBusyUsers = busyUsers.length > 0

    const listFreeUsers = freeUsers.map((v, i) => <Member avatar={ URL_HOST + v?.profilePictureUrl} lvl={get_level(v?.exp)} user={v} key={i} />)
    const listSoonFreeUsers = soonFreeUsers.map((v, i) => <Member avatar={URL_HOST + v?.profilePictureUrl} lvl={get_level(v?.exp)} user={v} key={i} />)
    const listBusyUsers = busyUsers.map((v, i) => <Member avatar={URL_HOST + v?.profilePictureUrl} lvl={get_level(v?.exp)} user={v} key={i} />)

    useEffect(() => {
        handleSearchUser()
    }, [inputSearch])


    const handleSubmit = () => {
        const selectedFreeUsers = freeUsers.filter((v, i) => v.selected)
        const selectedSoonFreeUsers = soonFreeUsers.filter((v, i) => v.selected)
        const selectedBusyUsers = busyUsers.filter((v, i) => v.selected)

        const selectedUsers = [...selectedFreeUsers, ...selectedSoonFreeUsers, ...selectedBusyUsers]
        onSelectedUsers(selectedUsers)
        onClose()
    }


    const handleClose = () => {
        onClose()
    }



    return visible && (
        <div className={styles.baseContainer}>
            {isRightArrow ? <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} /> : null}

            <div>
                <h1 className={styles.titleComponent}>Добавление пользователя</h1>
                <SubPanelContainer className={styles.container}>

                    <div className={styles.row}>
                        <input
                            type="search"
                            placeholder='Поиск'
                            className={styles.input_search}
                            value={inputSearch}
                            onChange={(e) => setInputSearch(e.target.value)}
                        />
                        <div className={styles.btn_close} onClick={() => handleClose()}>
                            <FontAwesomeIcon icon={faClose} className={styles.icon_close} />
                        </div>
                    </div>
                    <div className={styles.members_list}>
                        {visibleFreeUsers && (
                            <div>
                                <div className={styles.sub_title}>Свободные</div>
                                <div className={styles.members_flex}>
                                    {listFreeUsers}
                                </div>
                            </div>
                        )}

                        {visibleSoonFreeUsers && (
                            <div>
                                <div className={styles.sub_title}>Скоро освободятся</div>
                                <div className={styles.members_flex}>
                                    {listSoonFreeUsers}
                                </div>
                            </div>
                        )}

                        {visibleBusyUsers && (
                            <div>
                                <div className={styles.line_dashed}></div>
                                <div className={styles.members_flex}>
                                    {listBusyUsers}
                                </div>
                            </div>
                        )}


                    </div>
                    <button onClick={() => handleSubmit()}>Добавить</button>
                </SubPanelContainer>
            </div>

        </div>
    )
}