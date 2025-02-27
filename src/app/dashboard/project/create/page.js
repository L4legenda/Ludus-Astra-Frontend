"use client"
import { useState, useCallback } from 'react';
import styles from './page.module.css'
import { SubPanelContainer } from "@/components/panel/SubPanelContainer"
import { MemberList } from '@/components/member/MemberList';
import { SelecterUser } from '@/components/user/SelecterUser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { ModalLongText } from '../components/modal/modal-long-text/ModalLongText';


export default function ProjectCreate() {

    const handleContentDescriptionChange = (newContent) => {
        setFormData({ ...formData, description: newContent });
        setModalDescription(false);
    };

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

        try {
            const res = await fetchSignin(formData)

            setSuccess(true);
        } catch (err) {
            setError(err.message);
        }
    };

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
                            <MemberList />
                        </div>
                        <button type="submit" style={{ padding: '10px 20px' }}>
                            Создать
                        </button>
                    </form>
                </SubPanelContainer>
            </div>
            <div>
                <SelecterUser />
            </div>
        </main>
    )
}