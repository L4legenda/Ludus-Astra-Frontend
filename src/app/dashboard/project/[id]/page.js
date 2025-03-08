"use client"
import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faPersonWalking, faPersonHiking } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../components/task/Task';
import { ModalViewTask } from '../components/modal/modal-view-task/ModalViewTask';
import { ModalCreateTask } from '../components/modal/modal-create-task/ModalCreateTask';
import { useState } from 'react';
export default function ProjectView({ params }) {
    const [isModalViewTask, setModalViewTask] = useState(false)
    const [isModalCreateTask, setModalCreateTask] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button
                    className={styles.btn_crate_task}
                    onClick={() => setModalCreateTask(true)}>
                    Создать задачу
                </button>
                {isModalCreateTask && (
                    <ModalCreateTask isModal={isModalCreateTask} onClose={() => setModalCreateTask(false)} />
                )}




                <input type='search' placeholder='Поиск' className={styles.input_search} />
            </div>
            <div className={styles.container_tasks}>
                <div className={styles.priority}>
                    <FontAwesomeIcon icon={faFire} className={styles.priority_icon} />
                    <div className={styles.priority_text}>Высокий приоритет</div>
                </div>
                <div className={styles.task_box}>
                    <div className={styles.task_box_border}></div>
                    <div className={styles.task_box_content}>
                        <Task onClick={() => setModalViewTask(true)} />
                        <Task onClick={() => setModalViewTask(true)} />
                        <Task onClick={() => setModalViewTask(true)} />
                        <Task onClick={() => setModalViewTask(true)} />
                        <Task onClick={() => setModalViewTask(true)} />
                        <Task onClick={() => setModalViewTask(true)} />
                        <Task onClick={() => setModalViewTask(true)} />
                    </div>
                </div>
                <div className={styles.priority}>
                    <FontAwesomeIcon icon={faPersonWalking} className={styles.priority_icon} />
                    <div className={styles.priority_text}>Средний приоритет</div>
                </div>
                <div className={styles.task_box}>
                    <div className={styles.task_box_border}></div>
                    <div className={styles.task_box_content}>
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                    </div>
                </div>

                <div className={styles.priority}>
                    <FontAwesomeIcon icon={faPersonHiking} className={styles.priority_icon} />
                    <div className={styles.priority_text}>Низкий приоритет</div>
                </div>
                <div className={styles.task_box}>
                    <div className={styles.task_box_border}></div>
                    <div className={styles.task_box_content}>
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                        <Task />
                    </div>
                </div>
            </div>
            <ModalViewTask isModal={isModalViewTask} onClose={() => setModalViewTask(false)} />
        </div>
    )
}