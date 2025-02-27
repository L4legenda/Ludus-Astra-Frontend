import styles from './MyEditor.module.css';

export function MyEditor({ onChange, value }) {

    return <textarea
        className={styles.editor}
        value={value}
        onChange={(e)=>onChange(e.target.value)}
    ></textarea>
};
