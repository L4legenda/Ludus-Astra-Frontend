"use client"
import styles from './ModalViewTask.module.css'
import { useState, useEffect } from 'react';
import { Modal } from '@/components/modal/Modal'
import { MyEditor } from '@/components/editor/MyEditor'

export function ModalViewTask({ isModal, onClose, value, handleContent }) {
    const [content, setContent] = useState(value);

    useEffect(() => {
        if (content !== value) {
            setContent(value)
        }

    }, [value])

    const submitContent = () => {
        handleContent(content)
    };

    return (
        <Modal isOpen={isModal} onClose={onClose} className={styles.modal}>
            <MyEditor value={content} onChange={setContent} />
            <button onClick={() => submitContent()}>Сохранить</button>
        </Modal>
    )
}