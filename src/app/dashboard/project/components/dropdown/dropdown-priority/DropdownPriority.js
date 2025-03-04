import styles from './DropdownPriority.module.css';
import { useState } from 'react';

export function TaskPriorityDropdown({ className, style, labelStyle, selectStyle }) {
    const [status, setStatus] = useState('');

    const handleStatusChange = (event) => {
        setStatus(event.target.value);
        // Здесь можно добавить логику для обновления статуса задачи
    };

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
                <option value="hight">Высокий</option>
                <option value="middle">Средний</option>
                <option value="low">Низкий</option>
            </select>
        </div>
    );
};

