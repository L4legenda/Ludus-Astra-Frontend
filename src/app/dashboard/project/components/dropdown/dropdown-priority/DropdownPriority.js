import { fetchGetPriorityTask } from '@/api/task';
import styles from './DropdownPriority.module.css';
import { useEffect, useState } from 'react';

export function TaskPriorityDropdown({ className, style, labelStyle, selectStyle, onChange }) {
    const [status, setStatus] = useState('');
    const [listPriority, setListPriority] = useState([]);
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
        onChange && onChange(event.target.value)
    };

    const handleFetchGetPriority = async () => {
        const response = await fetchGetPriorityTask();
        setListPriority(response)
    }
    useEffect(() => {
        handleFetchGetPriority()
    }, [])

    return (
        <div className={`${styles.container} ${className}`} style={style}>
            <label htmlFor="task-status" style={labelStyle} className={styles.title}>
                Приоритет задачи:
            </label>
            <select
                id="task-status"
                value={status}
                onChange={handleStatusChange}
                style={selectStyle}
                className={styles.select}
            >
                <option value="">Выберите приоритет</option>
                {listPriority.map((v, i) => (
                    <option key={i} value={v.id}>{v.name}</option>
                ))}

            </select>
        </div>
    );
};

