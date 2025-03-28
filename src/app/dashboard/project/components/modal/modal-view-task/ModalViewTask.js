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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { SelecterUser } from '@/components/user/SelecterUser';
import { MyDatePicker } from '../../datepicker/DatePicker';
import { fetchUpdateTask } from '@/api/task';

export function ModalViewTask({ isModal, onClose, data }) {

    const [isEditingName, setIsEditingName] = useState(false)

    const [name, setName] = useState(data?.title)
    const [deadline, setDeadline] = useState(data?.deadline)
    const [status, setStatus] = useState(data?.status)
    const [priority, setPriority] = useState(data?.priority)
    const [description, setDescription] = useState(data?.description)
    const [subTasks, setSubTasks] = useState(data?.subTasks)

    const [isPerformersMember, setIsPerformersMember] = useState(false);
    const [listPerformersMember, setListPerformersMember] = useState(data?.assignees || []);

    const handleDeletePerformersMember = (index) => {
        const _members = listResponsibleMember.filter((v, i) => i !== index)
        setListPerformersMember(_members)
    }
    const handleSelectedPerformersMember = (listUsers) => {
        setListPerformersMember([...listPerformersMember, ...listUsers])
    }

    const submitContent = async () => {
        const id_task = data?.id;
        let _subTasks = subTasks
        if (typeof subTasks == "string"){
            _subTasks = JSON.parse(subTasks);
        }
        console.log(subTasks)
        await fetchUpdateTask(id_task, {
            "title": name,
            "description": description,
            "deadline": new Date(deadline).toISOString(),
            "status": parseInt(status),
            "priority": parseInt(priority),
            "assigneeIds": listPerformersMember.map((v, i) => v.id),
            "subTasks": JSON.stringify(_subTasks),
        })
        onClose()
    };

    return (
        <Modal isOpen={isModal} onClose={onClose} className={styles.modal}>
            <div className={styles.container_name}>
                <div className={styles.row}>
                    {isEditingName ? (
                        <input
                            type='text'
                            placeholder='Введите название'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className={styles.input_name}
                        />
                    ) : (
                        <div className={styles.name}>
                            {name}
                        </div>
                    )}

                    <FontAwesomeIcon
                        icon={faPen}
                        className={styles.btnPen}
                        onClick={() => setIsEditingName(!isEditingName)}
                    />
                </div>


                <div className={styles.exp}>
                    +{data?.exp} опыта
                </div>
            </div>

            <div>
                <div className={styles.deadline}>Дедлайн</div>
                <MyDatePicker value={deadline} onChange={setDeadline} />
            </div>

            <div>
                <TaskStatusDropdown value={status} onChange={setStatus} />
            </div>
            <div>
                <TaskPriorityDropdown value={priority} onChange={setPriority} />
            </div>

            <DescriptionBox value={description} onChange={setDescription} />
            <div>
                <div className={styles.subtask_title}>
                    Под задачи:
                </div>
                <SubTaskInput data={subTasks} onChange={setSubTasks} />

            </div>

            <div>
                <div className={styles.performers_title}>Исполнитель:</div>
                <MemberList
                    listMembers={listPerformersMember}
                    onAddMember={() => setIsPerformersMember(true)}
                    onDelete={handleDeletePerformersMember} />

                <Modal isOpen={isPerformersMember} onClose={() => setIsPerformersMember(false)}>
                    <SelecterUser
                        visible={isPerformersMember}
                        onClose={() => setIsPerformersMember(false)}
                        onSelectedUsers={handleSelectedPerformersMember}
                        ignoreMembers={listPerformersMember}
                    />
                </Modal>
            </div>


            <button onClick={() => submitContent()} className={styles.btn_create}>Сохранить</button>
        </Modal>
    )
}