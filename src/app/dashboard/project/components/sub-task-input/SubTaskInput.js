'use client';

import { useState } from 'react';
import styles from './SubTaskInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

export function SubTaskInput() {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    // Обработка ввода при нажатии Enter
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTask();
        }
    };

    // Добавление новой задачи
    const addTask = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue && !tasks.some(task => task.text === trimmedValue)) {
            setTasks([...tasks, { text: trimmedValue, completed: false }]);
            setInputValue('');
        }
    };

    // Удаление задачи
    const removeTask = (taskToRemove) => {
        setTasks(tasks.filter(task => task.text !== taskToRemove));
    };

    // Переключение статуса выполнения
    const toggleTaskStatus = (taskText) => {
        setTasks(tasks.map(task =>
            task.text === taskText ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div className={styles.taskContainer}>
            <div className={styles.inputRow}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Введите задачу и нажмите Enter"
                    className={styles.taskInput}
                />
                <button className={styles.aiButton}>
                    <FontAwesomeIcon icon={faWandMagicSparkles} />
                </button>
            </div>

            <div className={styles.tasksList}>
                {tasks.map((task, index) => (
                    <div key={index} className={`${styles.task} ${task.completed ? styles.completed : ''}`}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTaskStatus(task.text)}
                            className={styles.checkbox}
                        />
                        <span className={styles.taskText}>{task.text}</span>
                        <button
                            className={styles.removeButton}
                            onClick={() => removeTask(task.text)}
                        >
                            ×
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};