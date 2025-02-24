"use client"
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from "next/image";
import styles from "./page.module.css";
import ButtonCosmic from "@/components/buttons/ButtonCosmic";
import Link from "next/link";
import { fetchSignup } from '@/api/auth';


export default function Home() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    password: '',
  });
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setPhoto(file);
      setPhotoPreview(URL.createObjectURL(file));
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  const removePhoto = () => {
    setPhoto(null);
    setPhotoPreview(null);
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

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
      <main className={styles.main}>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="fullname" className={styles.label}>ФИО:</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="email" className={styles.label}>Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="password" className={styles.label}>Пароль:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Фотография (опционально):</label>
            <div
              {...getRootProps()}
              style={{
                border: '2px dashed #cccccc',
                padding: '20px',
                textAlign: 'center',
                cursor: 'pointer',
              }}
            >
              <input {...getInputProps()} />
              {isDragActive ? (
                <p>Перетащите сюда файл...</p>
              ) : (
                <p>Перетащите сюда файл или кликните для выбора</p>
              )}
            </div>
            {photoPreview && (
              <div style={{ marginTop: '10px', position: 'relative' }}>
                <img
                  src={photoPreview}
                  alt="Предпросмотр"
                  style={{ maxWidth: '100%', maxHeight: '200px' }}
                />
                <button
                  type="button"
                  onClick={removePhoto}
                  style={{
                    position: 'absolute',
                    top: '5px',
                    right: '5px',
                    background: 'red',
                    color: '#fff',
                    border: 'none',
                    padding: '5px',
                    cursor: 'pointer',
                  }}
                >
                  Удалить
                </button>
              </div>
            )}
          </div>
          <button type="submit" style={{ padding: '10px 20px' }}>
            Зарегистрироваться
          </button>
        </form>
      </main>
    </div>
  );
}
