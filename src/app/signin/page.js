"use client"
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from "next/image";
import styles from "./page.module.css";
import ButtonCosmic from "@/components/buttons/ButtonCosmic";
import Link from "next/link";
import { fetchSignin } from '@/api/auth';
import { BgCosmic } from '@/components/cosmic/BgCosmic';
import { PanelContainer } from '@/components/panel/PanelContainer';
import { redirect } from 'next/navigation';


export default function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        var success = false;

        try {
            const res = await fetchSignin(formData);
            localStorage.setItem("token", res.token);
            setSuccess(true);
            success = true;
        } catch (err) {
            setError(err.message);
        }
        if (success) redirect("/dashboard")
    };

    return (
        <div className={styles.page}>
            <BgCosmic>
                <main className={styles.main}>
                    <h1 className={styles.titlePage}>Авторизация</h1>
                    <PanelContainer>
                        <form onSubmit={handleSubmit} className={styles.form}>
                            <div className='box-input'>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className='box-input'>
                                <label htmlFor="password">Пароль:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            {error && (<div className={styles.error_block}>
                                {error}
                            </div>)}
                            <button type="submit" style={{ padding: '10px 20px' }}>
                                Войти
                            </button>
                        </form>



                    </PanelContainer>
                </main>
            </BgCosmic>
        </div>
    );

}