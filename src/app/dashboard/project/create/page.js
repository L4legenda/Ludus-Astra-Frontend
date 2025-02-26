"use client"
import { useState, useCallback } from 'react';
import styles from './page.module.css'
import { SubPanelContainer } from "@/components/panel/SubPanelContainer"
import { MemberList } from '@/components/member/MemberList';
export default function Dashboard() {
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
            <h1 className={styles.titleComponent}>Создание Проекта</h1>
            <SubPanelContainer>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <div className='box-input'>
                        <label htmlFor="name">Название:</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className='box-input'>
                        <label htmlFor="description">Описание:</label>
                        <textarea
                            id='description'
                            name="description"
                            value={formData.description}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <div className='box-input'>
                        <label htmlFor="members">Участники:</label>
                        <div>
                            <MemberList />
                        </div>
                    </div>
                    <button type="submit" style={{ padding: '10px 20px' }}>
                        Войти
                    </button>
                </form>
            </SubPanelContainer>
        </main>
    )
}