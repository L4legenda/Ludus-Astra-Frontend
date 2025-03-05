import { useState } from "react"
import styles from "./DescriptionBox.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { ModalLongText } from "../modal/modal-long-text/ModalLongText";


export function DescriptionBox() {
    const [content, setContent] = useState("")

    const [visibleContent, setVisibleContent] = useState(false);
    const [isModalDescription, setModalDescription] = useState(false);

    const handleContent = (v) => {
        setContent(v)
    }
    return (
        <div>
            <div className={styles.title}>
                <div>Описание:</div>

                <FontAwesomeIcon icon={faPenToSquare} className={styles.icon_edit} onClick={() => setModalDescription(!isModalDescription)} />
                <ModalLongText isModal={isModalDescription} onClose={() => setModalDescription(false)} value={content} handleContent={handleContent} />
            </div>
            <div className={styles.content} style={{ "WebkitLineClamp": visibleContent ? "none" : 4 }}>
                {content}
                это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"
                для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую йцу
                ыфраырваолви олврамолры врамо лр ыв ла орфы во лмл овы тмлов атимл овам йц д вы ла выо аоц уоа в
                лваощшцуак у куа это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой"
                для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую йцу
                ыфраырваолви олврамолры врамо лр ыв ла орфы во лмл овы тмлов атимл овам йц д вы ла выо аоц уоа в
                лваощшцуак у куа
            </div>
            <div
                className={styles.btn}
                onClick={() => setVisibleContent(!visibleContent)}>
                {visibleContent ? "Скрыть" : "Раскрыть"}
            </div>
        </div>
    )
}