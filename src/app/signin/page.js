"use client"
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from "next/image";
import styles from "./page.module.css";
import ButtonCosmic from "@/components/buttons/ButtonCosmic";
import Link from "next/link";
import { fetchSignin } from '@/api/auth';

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

        try {
            const res = await fetchSignin(formData)

            setSuccess(true);
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <div style={{ margin: '0 auto', maxWidth: '400px', padding: '20px' }}>
                    <h1>Авторизация</h1>
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    {success ? (
                        <p style={{ color: 'green' }}>Вы успешно авторизовались!</p>
                    ) : (
                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '1rem' }}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        boxSizing: 'border-box',
                                    }}
                                />
                            </div>
                            <div style={{ marginBottom: '1rem' }}>
                                <label htmlFor="password">Пароль:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    style={{
                                        width: '100%',
                                        padding: '8px',
                                        boxSizing: 'border-box',
                                    }}
                                />
                            </div>
                            <button type="submit" style={{ padding: '10px 20px' }}>
                                Войти
                            </button>
                        </form>
                    )}
                </div>
            </main>
        </div>
    );

}