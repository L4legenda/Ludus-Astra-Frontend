import styles from './DropdownStatus.module.css';
import { useState } from 'react';

export function TaskStatusDropdown({ className, style, labelStyle, selectStyle }) {
    const [status, setStatus] = useState('');

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
        // Здесь можно добавить логику для обновления статуса задачи
    };

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
                <option value="todo">To Do</option>
                <option value="in-progress">In Progress</option>
                <option value="done">Done</option>
            </select>
        </div>
    );
};

