import { useState } from "react"
import styles from "./DescriptionBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { ModalLongText } from "../modal/modal-long-text/ModalLongText";


export function DescriptionBox({value, onChange}) {
    const [content, setContent] = useState("")

    const [visibleContent, setVisibleContent] = useState(false);
    const [isModalDescription, setModalDescription] = useState(false);

    const handleContent = (v) => {
        setContent(v)
        onChange(v)
    }

    return (
        <div>
            <div className={styles.title}>
                <div>Описание:</div>

                <FontAwesomeIcon icon={faPenToSquare} className={styles.icon_edit} onClick={() => setModalDescription(!isModalDescription)} />
                <ModalLongText isModal={isModalDescription} onClose={() => setModalDescription(false)} value={content} handleContent={handleContent} />
            </div>
            <pre className={styles.content} style={{ "WebkitLineClamp": visibleContent ? "none" : 4 }}>
                {content}

            </pre>
            <div
                className={styles.btn}
                onClick={() => setVisibleContent(!visibleContent)}>
                {visibleContent ? "Скрыть" : "Раскрыть"}
            </div>
        </div>
    )
}