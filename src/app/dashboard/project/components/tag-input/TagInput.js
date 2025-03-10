'use client'; // Это клиентский компонент

import { useState } from 'react';
import styles from './TagInput.module.css'; // Предполагается, что вы создадите CSS модуль
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

export function TagInput({ description }) {
    const [tags, setTags] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    const handleGenerateTag = async () => {
        try {
            setIsLoading(true)
            const response = await fetchGenerateSubTask(description)
            setTags(response.map((v, i) => ({ text: v, completed: false })))
            setIsLoading(false)
        } catch (e) {
            setIsLoading(false)
        }
    }

    // Обработка ввода при нажатии Enter или запятой
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ',') {
            e.preventDefault();
            addTag();
        }
    };

    // Добавление нового тега
    const addTag = () => {
        const trimmedValue = inputValue.trim();
        if (trimmedValue && !tags.includes(trimmedValue)) {
            setTags([...tags, trimmedValue]);
            setInputValue('');
        }
    };

    // Удаление тега
    const removeTag = (tagToRemove) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
        <div className={styles.tagContainer}>
            <div className={styles.input_row}>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Введите навык и нажмите Enter"
                    className={styles.tagInput}
                    disabled={isLoading}
                />
                <button className={styles.aiButton} onClick={() => handleGenerateTag()} disabled={isLoading}>
                    {isLoading ? <Loader /> : <FontAwesomeIcon icon={faWandMagicSparkles} />}
                </button>
            </div>

            <div className={styles.tagsList}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>
                        {tag}
                        <button
                            className={styles.removeButton}
                            onClick={() => removeTag(tag)}
                        >
                            ×
                        </button>
                    </span>
                ))}
            </div>
        </div>
    );
};
