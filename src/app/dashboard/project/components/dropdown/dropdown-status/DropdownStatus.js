import { fetchGetStatusTask } from '@/api/task';
import styles from './DropdownStatus.module.css';
import { useEffect, useState } from 'react';

export function TaskStatusDropdown({ className, style, labelStyle, selectStyle }) {
    const [status, setStatus] = useState(0);
    const [listStatus, setListStatus] = useState([])

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
        // Здесь можно добавить логику для обновления статуса задачи
    };
    const handleFetchGetStatus = async () => {
        const response = await fetchGetStatusTask();
        setListStatus(response)
    }
    useEffect(() => {
        handleFetchGetStatus()
    }, [])

    return (
        <div className={`${styles.container} ${className}`} style={style}>
            <label htmlFor="task-status" style={labelStyle} className={styles.title}>
                Статус задачи:
            </label>
            <select
                id="task-status"
                value={status}
                onChange={handleStatusChange}
                style={selectStyle}
                className={styles.select}
            >
                <option value="">Выберите статус</option>
                {listStatus.map((v, i) => (
                    <option key={i} value={v.id}>
                        {v.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

