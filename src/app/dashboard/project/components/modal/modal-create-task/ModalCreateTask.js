"use client"
import styles from './ModalCreateTask.module.css'
import { useState, useEffect } from 'react';
import { Modal } from '@/components/modal/Modal'
import { MyEditor } from '@/components/editor/MyEditor'
import { MemberList } from '@/components/member/MemberList';
import { TaskStatusDropdown } from '../../dropdown/dropdown-status/DropdownStatus';
import { TaskPriorityDropdown } from '../../dropdown/dropdown-priority/DropdownPriority';
import { TagInput } from '../../tag-input/TagInput';
import { SelecterUser } from '@/components/user/SelecterUser';
import { DescriptionBox } from '../../description/DescriptionBox';
import { SubTaskInput } from '../../sub-task-input/SubTaskInput';
import { MyDatePicker } from '../../datepicker/DatePicker';
import { UploadFile } from '@/components/upload_file/UploadFIle';
import { fetchCreateTask } from '@/api/task';

export function ModalCreateTask({ project_id, isModal, onClose, value, handleContent }) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [deadline, setDeadline] = useState(new Date())
    const [priority, setPriority] = useState(0);
    const [subTasks, setSubTasks] = useState([])
    const [isResponsibleMember, setIsResponsibleMember] = useState(false);
    const [listResponsibleMember, setListResponsibleMember] = useState([]);

    const [isPerformersMember, setIsPerformersMember] = useState(false);
    const [listPerformersMember, setListPerformersMember] = useState([]);

    const [files, setFiles] = useState();


    const handleDeleteResponsibleMember = (index) => {
        const _members = listResponsibleMember.filter((v, i) => i !== index)
        setListResponsibleMember(_members)
    }
    const handleSelectedResponsibleMember = (listUsers) => {
        setListResponsibleMember([...listResponsibleMember, ...listUsers])
    }


    const handleDeletePerformersMember = (index) => {
        const _members = listResponsibleMember.filter((v, i) => i !== index)
        setListPerformersMember(_members)
    }
    const handleSelectedPerformersMember = (listUsers) => {
        setListPerformersMember([...listPerformersMember, ...listUsers])
    }

    const submitContent = async () => {
        await fetchCreateTask({
            "projectId": project_id,
            "title": name,
            "description": description,
            "deadline": deadline.toISOString(),
            "priority": parseInt(priority),
            "assigneeIds": listPerformersMember.map((v, i) => v.id),
            "subTasks": JSON.stringify(subTasks)
        });
        onClose()

    };


    return (
        <Modal isOpen={isModal} onClose={onClose} className={styles.modal}>
            <div className={styles.container_name}>
                <div className={styles.name}>Название</div>

                <input
                    type='text'
                    placeholder='Введите название'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div>
                <div className={styles.deadline}>Дедлайн</div>
                <MyDatePicker onChange={setDeadline} />
            </div>
            {/* <div>
                <TaskStatusDropdown />
            </div> */}
            <div>
                <TaskPriorityDropdown onChange={(v)=>setPriority(v)} />
            </div>

            <DescriptionBox value={description} onChange={setDescription} />
            <div>
                <div className={styles.subtask_title}>
                    Под задачи:
                </div>
                <SubTaskInput description={description} onChange={setSubTasks} />

            </div>
            <div>
                {/* <UploadFile
                    title={"Файлы"}
                    setPhoto={setFiles}
                /> */}
            </div>
            {/* <div>
                <div className={styles.responsible_title}>Ответственный:</div>
                <MemberList
                    listMembers={listResponsibleMember}
                    onAddMember={() => setIsResponsibleMember(true)}
                    onDelete={handleDeleteResponsibleMember} />
                <Modal isOpen={isResponsibleMember} onClose={() => setIsResponsibleMember(false)}>
                    <SelecterUser
                        visible={isResponsibleMember}
                        onClose={() => setIsResponsibleMember(false)}
                        onSelectedUsers={handleSelectedResponsibleMember}
                        ignoreMembers={listResponsibleMember}
                    />
                </Modal>

            </div> */}

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



            <button onClick={() => submitContent()} className={styles.btn_create}>Создать</button>
        </Modal>
    )
}