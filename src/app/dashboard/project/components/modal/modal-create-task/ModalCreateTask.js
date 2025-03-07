"use client"
import styles from './ModalCreateTask.module.css'
import { useState, useEffect } from 'react';
import { Modal } from '@/components/modal/Modal'
import { MyEditor } from '@/components/editor/MyEditor'
import { MemberList } from '@/components/member/MemberList';
import { TaskStatusDropdown } from '../../dropdown/dropdown-status/DropdownStatus';
import { TaskPriorityDropdown } from '../../dropdown/dropdown-priority/DropdownPriority';
import { TagInput } from '../../tag-input/TagInput';
import { DescriptionBox } from '../../description/DescriptionBox';
import { SubTaskInput } from '../../sub-task-input/SubTaskInput';


export function ModalCreateTask({ isModal, onClose, value, handleContent }) {

    const submitContent = () => {
        handleContent("")
    };

    return (
        <Modal isOpen={isModal} onClose={onClose} className={styles.modal}>
            <div className={styles.container_name}>
                <div className={styles.name}>Название</div>

                <input type='text' placeholder='Введите название' />
            </div>

            <div>
                <TaskStatusDropdown />
            </div>
            <div>
                <TaskPriorityDropdown />
            </div>

            <DescriptionBox />
            <div>
                <div className={styles.subtask_title}>
                    Под задачи:
                </div>
                <SubTaskInput />

            </div>

            <div>
                <div className={styles.responsible_title}>Ответственный:</div>
                <MemberList />
            </div>
            <div>
                <div className={styles.performers_title}>Исполнитель:</div>
                <MemberList />
            </div>

            <div>
                <div className={styles.title_tag}>Навыки:</div>
                <TagInput />
            </div>

            <button onClick={() => submitContent()}>Сохранить</button>
        </Modal>
    )
}