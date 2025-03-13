"use client"
import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faPersonWalking, faPersonHiking } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../components/task/Task';
import { ModalViewTask } from '../components/modal/modal-view-task/ModalViewTask';
import { ModalCreateTask } from '../components/modal/modal-create-task/ModalCreateTask';
import { useEffect, useState, use } from 'react';
import { fetchGetListTask } from '@/api/task';
export default function ProjectView({ params }) {
    const unwrappedParams = use(params); // Разворачиваем промис
    const id_project = unwrappedParams.id; // Теперь доступ к id безопасен
    const [search, setSearch] = useState("");

    const [isModalCreateTask, setModalCreateTask] = useState(false)

    const [listPriorityTask, setListPriorityTask] = useState([])

    const listHighPriority = listPriorityTask.filter((v, i) => (
        v?.priority === 2
    ))
    const listMiddlePriority = listPriorityTask.filter((v, i) => (
        v?.priority === 1
    ))
    const listLowPriority = listPriorityTask.filter((v, i) => (
        v?.priority === 0
    ))

    const handleListTask = async () => {
        const response = await fetchGetListTask(id_project, search);
        if (response.length != listPriorityTask.length) {
            setListPriorityTask(response);
        }

    }

    useEffect(() => {
        handleListTask()
    })

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button
                    className={styles.btn_crate_task}
                    onClick={() => setModalCreateTask(true)}>
                    Создать задачу
                </button>
                {isModalCreateTask && (
                    <ModalCreateTask project_id={id_project} isModal={isModalCreateTask} onClose={() => setModalCreateTask(false)} />
                )}

                <input
                    type='search'
                    placeholder='Поиск'
                    className={styles.input_search}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div className={styles.container_tasks}>
                {listHighPriority.length > 0 && (
                    <div>
                        <div className={styles.priority}>
                            <FontAwesomeIcon icon={faFire} className={styles.priority_icon} />
                            <div className={styles.priority_text}>Высокий приоритет</div>
                        </div>

                        <div className={styles.task_box}>
                            <div className={styles.task_box_border}></div>
                            <div className={styles.task_box_content}>
                                {listHighPriority.map((v, i) => (
                                    <Task key={i} data={v} />
                                ))}

                            </div>
                        </div>
                    </div>

                )}
                {listMiddlePriority.length > 0 && (
                    <div>
                        <div className={styles.priority}>
                            <FontAwesomeIcon icon={faPersonWalking} className={styles.priority_icon} />
                            <div className={styles.priority_text}>Средний приоритет</div>
                        </div>
                        <div className={styles.task_box}>
                            <div className={styles.task_box_border}></div>
                            <div className={styles.task_box_content}>
                                {listMiddlePriority.map((v, i) => (
                                    <Task key={i} data={v} />
                                ))}
                            </div>
                        </div>
                    </div>

                )}

                {listLowPriority.length > 0 && (
                    <div>
                        <div className={styles.priority}>
                            <FontAwesomeIcon icon={faPersonHiking} className={styles.priority_icon} />
                            <div className={styles.priority_text}>Низкий приоритет</div>
                        </div>
                        <div className={styles.task_box}>
                            <div className={styles.task_box_border}></div>
                            <div className={styles.task_box_content}>
                                {listLowPriority.map((v, i) => (
                                    <Task key={i} data={v} />
                                ))}
                            </div>
                        </div>
                    </div>
                )}

            </div>

        </div>
    )
}