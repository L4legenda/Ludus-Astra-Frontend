"use client"
import styles from './ModalViewTask.module.css'
import { useState, useEffect } from 'react';
import { Modal } from '@/components/modal/Modal'
import { MyEditor } from '@/components/editor/MyEditor'
import { MemberList } from '@/components/member/MemberList';

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
            <div>
                Задача 1
            </div>
            <div>
                +10 опыта
            </div>
            <div>
                В процессе
            </div>
            <div>
                Высокий приоритет
            </div>
            <div>
                <div>Навыки:</div>
                <div>
                    <div>React</div>
                    <div>HTML</div>
                    <div>CSS</div>

                </div>
            </div>
            <div>
                <div>Описание</div>
                <div>
                    это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"
                    для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую йцу
                    ыфраырваолви олврамолры врамо лр ыв ла орфы во лмл овы тмлов атимл овам йц д вы ла выо аоц уоа в
                    лваощшцуак у куа ...
                </div>
                <div>Раскрыть</div>
            </div>
            <div>
                <div>
                    Под задачи:
                </div>
                <div>
                    <button>Автоматически</button>
                    <button>Ручное создание</button>
                </div>

            </div>



            <div>
                <div>Ответственный:</div>
                <MemberList />
            </div>
            <div>
                <div>Исполнитель:</div>
                <MemberList />
            </div>

            <button onClick={() => submitContent()}>Сохранить</button>
        </Modal>
    )
}