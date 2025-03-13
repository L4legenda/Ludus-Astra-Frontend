"use client"
import styles from './ModalViewTask.module.css'
import { useState, useEffect } from 'react';
import { Modal } from '@/components/modal/Modal'
import { MyEditor } from '@/components/editor/MyEditor'
import { MemberList } from '@/components/member/MemberList';
import { TaskStatusDropdown } from '../../dropdown/dropdown-status/DropdownStatus';
import { TaskPriorityDropdown } from '../../dropdown/dropdown-priority/DropdownPriority';
import { TagInput } from '../../tag-input/TagInput';
import { DescriptionBox } from '../../description/DescriptionBox';
import { SubTaskInput } from '../../sub-task-input/SubTaskInput';


export function ModalViewTask({ isModal, onClose, data, handleContent }) {

    const submitContent = () => {
        handleContent("")
    };

    return (
        <Modal isOpen={isModal} onClose={onClose} className={styles.modal}>
            <div className={styles.name}>
                {data?.title}
                <div className={styles.exp}>
                    +{data?.exp} опыта
                </div>
            </div>

            <div>
                <TaskStatusDropdown />
            </div>
            <div>
                <TaskPriorityDropdown />
            </div>

            <DescriptionBox value={data?.description} />
            <div>
                <div className={styles.subtask_title}>
                    Под задачи:
                </div>
                <SubTaskInput data={data} />

            </div>

            <div>
                <div className={styles.performers_title}>Исполнитель:</div>
                <MemberList />
            </div>


            <button onClick={() => submitContent()}>Сохранить</button>
        </Modal>
    )
}