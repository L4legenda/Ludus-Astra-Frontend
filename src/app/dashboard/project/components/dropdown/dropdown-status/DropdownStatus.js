import { fetchGetStatusTask } from '@/api/task';
import styles from './DropdownStatus.module.css';
import { useEffect, useState } from 'react';

export function TaskStatusDropdown({ className, style, labelStyle, selectStyle, value, onChange }) {
    const [status, setStatus] = useState(value || 0);
    const [listStatus, setListStatus] = useState([])

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
        onChange(event.target.value)
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
                {listStatus.map((v, i) => (
                    <option key={i} value={v.id}>
                        {v.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

