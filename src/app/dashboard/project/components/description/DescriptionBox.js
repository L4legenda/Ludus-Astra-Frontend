import { useState } from "react"
import styles from "./DescriptionBox.module.css"

export function DescriptionBox() {
    const [visibleContent, setVisibleContent] = useState(false)
    return (
        <div>
            <div className={styles.title}>Описание:</div>
            <div className={styles.content} style={{ "WebkitLineClamp": visibleContent ? "none" : 4 }}>
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