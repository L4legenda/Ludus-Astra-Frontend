"use client"
import { useState, useCallback } from 'react';

import Image from "next/image";
import styles from "./page.module.css";
import ButtonCosmic from "@/components/buttons/ButtonCosmic";
import Link from "next/link";
import { fetchSignup } from '@/api/auth';
import { BgCosmic } from '@/components/cosmic/BgCosmic';
import { PanelContainer } from '@/components/panel/PanelContainer';
import { UploadFile } from '@/components/upload_file/UploadFIle';



export default function Home() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const [photo, setPhoto] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Собираем данные формы в FormData
    const data = new FormData();
    data.append('FullName', formData.name);
    data.append('Email', formData.email);
    data.append('Password', formData.password);
    if (photo) {
      data.append('Avatar', photo);
    }

    await fetchSignup(data);
  }

  return (
    <div className={styles.page}>
      <BgCosmic>
        <main className={styles.main}>
          <h1 className={styles.titlePage}>Регистрация</h1>
          <PanelContainer>

            <form onSubmit={handleSubmit} className={styles.form}>
              <div className='box-input'>
                <label htmlFor="fullname" className={styles.label}>ФИО:</label>
                <input
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='Заполните Фамилию Имя Отчество'
                  required
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <div className='box-input'>
                <label htmlFor="email" className={styles.label}>Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='Заполните Email'
                  required
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <div className='box-input'>
                <label htmlFor="password" className={styles.label}>Пароль:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder='Заполните Пароль'
                  required
                  style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
                />
              </div>
              <UploadFile title={"Фотография (опционально):"} setPhoto={setPhoto}/>

              <button type="submit" style={{ padding: '10px 20px' }}>
                Зарегистрироваться
              </button>
            </form>

          </PanelContainer>
        </main>
      </BgCosmic>

    </div>
  );
}
