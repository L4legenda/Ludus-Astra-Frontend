import styles from './UploadFIle.module.css'
import { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

export function UploadFile({ title, setPhoto }) {
    const [photoPreview, setPhotoPreview] = useState(null);

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        if (file) {
            setPhoto(file);
            setPhotoPreview(URL.createObjectURL(file));
        }
    }, []);

    const removePhoto = () => {
        setPhoto(null);
        setPhotoPreview(null);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: 'image/*',
    });


    return (
        <div>
            <label className={styles.titleComponent}>{title}</label>
            <div
                {...getRootProps()}
                className={styles.box_upload}
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
                        className={styles.preview_image}
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
    )
}