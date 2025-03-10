import styles from './Loader.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpinner } from "@fortawesome/free-solid-svg-icons"

export function Loader() {
    return <FontAwesomeIcon icon={faSpinner} className={styles['animate-spin']} />
}