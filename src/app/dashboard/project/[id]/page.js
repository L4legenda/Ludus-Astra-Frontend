import styles from './page.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire, faPersonWalking, faPersonHiking } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../components/task/Task';
import { ModalViewTask } from '../components/modal/modal-view-task/ModalViewTask';
import { useState } from 'react';
export default async function ProjectView({ params }) {
    const project_id = (await params).id
    const [isModalViewTask, setModalViewTask] = useState(false)
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <button className={styles.btn_crate_task}>Создать задачу</button>

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
                        <Task onClick={()=>setModalViewTask(true)}/>
                        <Task onClick={()=>setModalViewTask(true)}/>
                        <Task onClick={()=>setModalViewTask(true)}/>
                        <Task onClick={()=>setModalViewTask(true)}/>
                        <Task onClick={()=>setModalViewTask(true)}/>
                        <Task onClick={()=>setModalViewTask(true)}/>
                        <Task onClick={()=>setModalViewTask(true)}/>
                    </div>
                </div>
                <div className={styles.priority}>
                    <FontAwesomeIcon icon={faPersonWalking} className={styles.priority_icon} />
                    <div className={styles.priority_text}>Средний приоритет</div>
                </div>
                <div className={styles.task_box}>
                    <div className={styles.task_box_border}></div>
                    <div className={styles.task_box_content}>
                        <Task/>
                        <Task/>
                        <Task/>
                        <Task/>
                        <Task/>
                        <Task/>
                        <Task/>
                    </div>
                </div>

                <div className={styles.priority}>
                    <FontAwesomeIcon icon={faPersonHiking} className={styles.priority_icon} />
                    <div className={styles.priority_text}>Низкий приоритет</div>
                </div>
                <div className={styles.task_box}>
                    <div className={styles.task_box_border}></div>
                    <div className={styles.task_box_content}>
                        <Task/>
                        <Task/>
                        <Task/>
                        <Task/>
                        <Task/>
                        <Task/>
                        <Task/>
                    </div>
                </div>
            </div>
            <ModalViewTask isModal={isModalViewTask}/>
        </div>
    )
}