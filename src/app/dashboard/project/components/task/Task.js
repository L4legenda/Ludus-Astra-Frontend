import styles from './Task.module.css';
import { useState, useEffect } from 'react';
import { ModalViewTask } from '../modal/modal-view-task/ModalViewTask';
import { fetchGetStatusTask } from '@/api/task';

export function Task({ data }) {
    const [isModalViewTask, setModalViewTask] = useState(false)

    const [listStatus, setListStatus] = useState([])

    const handleFetchGetStatus = async () => {
        const response = await fetchGetStatusTask();
        setListStatus(response)
    }
    useEffect(() => {
        handleFetchGetStatus()
    }, [])

    const formateDate = (date) => {
        const day = date.getDate(); // День
        const month = date.getMonth() + 1; // Месяц (добавляем 1, так как месяцы нумеруются с 0)
        const year = date.getFullYear(); // Год

        const formattedDate = `${day}-${month}-${year}`;
        return formattedDate;
    }

    const formateStatus = (status) => {
        return listStatus?.[status]?.name
    }

    return (
        <div>
            <div className={styles.container} onClick={() => setModalViewTask(true)}>
                <div className={styles.name}>
                    {data?.title}
                </div>
                <div className={styles.exp}>
                    +{data?.exp} Опыта
                </div>
                <div className={styles.deadline}>
                    {formateDate(new Date(data?.deadline))}
                </div>
                <div className={styles.user}>
                    <img src="/avatars/Avatar.png" alt="" className={styles.user_avatar} />
                    <div className={styles.user_name}>Фокша А.С.</div>
                </div>
                <div className={styles.process}>
                    {formateStatus(data?.status)}
                </div>

            </div>
            <ModalViewTask data={data} isModal={isModalViewTask} onClose={() => { setModalViewTask(false) }} />
        </div>

    )
}