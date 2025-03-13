'use client';

import { useEffect, useState } from 'react';
import styles from './SubTaskInput.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';
import { fetchGenerateSubTask } from '@/api/sub-task';
import { Loader } from '@/components/loader/Loader';

export function SubTaskInput({ data, description, onChange }) {
    const [tasks, setTasks] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const handleDataSubTasks = async () => {
        const _subTasks = data;
        if (!_subTasks) return;
        try {
            const json_subTasks = JSON.parse(_subTasks);
            setTasks(json_subTasks);
        } catch (e) {

        }
    }

    const handleGenerateSubTasks = async () => {
        try {
            setIsLoading(true)
            const response = await fetchGenerateSubTask(description)
            const _tasks = response.map((v, i) => ({ text: v, completed: false }))
            setTasks(_tasks)
            onChange(_tasks)
            setIsLoading(false)
        } catch (e) {
            setIsLoading(false)
        }
    }

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
            const _tasks = [...tasks, { text: trimmedValue, completed: false }]
            setTasks(_tasks);
            onChange(_tasks);
            setInputValue('');
        }
    };

    // Удаление задачи
    const removeTask = (taskToRemove) => {
        const _tasks = tasks.filter(task => task.text !== taskToRemove)
        setTasks(_tasks);
        onChange(_tasks);
    };

    // Переключение статуса выполнения
    const toggleTaskStatus = (taskText) => {
        const _tasks = tasks.map(task =>
            task.text === taskText ? { ...task, completed: !task.completed } : task
        )
        setTasks(_tasks);
        onChange(_tasks);
    };

    useEffect(() => {
        handleDataSubTasks()
    }, [])

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
                    disabled={isLoading}
                />
                <button className={styles.aiButton} onClick={() => handleGenerateSubTasks()} disabled={isLoading}>
                    {isLoading ? <Loader /> : <FontAwesomeIcon icon={faWandMagicSparkles} />}
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