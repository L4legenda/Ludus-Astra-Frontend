"use client"
import { useState, useCallback } from 'react';
import styles from './page.module.css'
import { SubPanelContainer } from "@/components/panel/SubPanelContainer"
import { MemberList } from '@/components/member/MemberList';
import { SelecterUser } from '@/components/user/SelecterUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ModalLongText } from '../components/modal/modal-long-text/ModalLongText';
import { fetchAddMemberToProject, fetchCreateProject } from '@/api/project';
import { redirect } from 'next/navigation';

export default function ProjectCreate() {

    const handleContentDescriptionChange = (newContent) => {
        setFormData({ ...formData, description: newContent });
        setModalDescription(false);
    };
    const [listMembers, setListMembers] = useState([]);
    const [isModalAddMember, setIsModalAddMember] = useState(false)
    const [error, setError] = useState(null)

    const [isModalDescription, setModalDescription] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        description: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        var success = false;
        var id_project = null;
        try {
            const resCreateProject = await fetchCreateProject(formData)
            id_project = resCreateProject.projectId;

            for (const member of listMembers) {
                await fetchAddMemberToProject(id_project, {
                    userId: member.id,
                    "role": null,
                })
            }
            success = true
        } catch (err) {
            setError(err.message);
        }
        if (success) redirect(`/dashboard/project/${id_project}`)
    };

    const handleSelectedUser = (listUsers) => {
        setListMembers([...listMembers, ...listUsers])
    }

    const handleDeleteMember = (index) => {
        const _members = listMembers.filter((v, i) => i !== index)
        setListMembers(_members)
    }

    return (
        <main className={styles.container}>
            <div className={styles.containerCreateProject}>
                <h1 className={styles.titleComponent}>Создание Проекта</h1>
                <SubPanelContainer>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        <div className='box-input'>
                            <label htmlFor="name">Название:</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder='Название проекта'
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <div className='box-input'>
                            <div className={styles.row}>
                                <label htmlFor="description">Описание:</label>
                                <FontAwesomeIcon icon={faPenToSquare} className={styles.edit_description} onClick={() => setModalDescription(!isModalDescription)} />
                                <ModalLongText isModal={isModalDescription} onClose={setModalDescription} value={formData.description} handleContent={handleContentDescriptionChange} />
                            </div>

                            <textarea
                                id='description'
                                name="description"
                                placeholder='Описание проекта'
                                value={formData.description}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>
                        <div className='box-input'>
                            <label htmlFor="members">Участники:</label>
                            <MemberList
                                listMembers={listMembers}
                                onAddMember={() => setIsModalAddMember(true)}
                                onDelete={handleDeleteMember}
                            />
                        </div>
                        <button type="submit" style={{ padding: '10px 20px' }}>
                            Создать
                        </button>
                    </form>
                </SubPanelContainer>
            </div>
            <div>
                {isModalAddMember && (
                    <SelecterUser
                        isRightArrow={true}
                        visible={isModalAddMember}
                        onClose={() => setIsModalAddMember(false)}
                        onSelectedUsers={handleSelectedUser}
                        ignoreMembers={listMembers}
                    />
                )}

            </div>
        </main>
    )
}