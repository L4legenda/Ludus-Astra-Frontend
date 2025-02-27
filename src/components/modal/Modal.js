"use client"
import styles from "./Modal.module.css";
import { useEffect } from 'react';
import ReactDOM from 'react-dom';
import { SubPanelContainer } from "../panel/SubPanelContainer";

export function Modal({ children, isOpen, onClose, className }) {
    if (!isOpen){
        return
    }
    const modalRoot = document.getElementById('modal-root');
    if (!modalRoot) {
        return null;
    }
    return ReactDOM.createPortal(
        <div className={`${styles.modal}`}>
            <div className={styles.background} onClick={()=>onClose(false)}></div>
            <SubPanelContainer className={`${styles.container} ${className}`}>
                {children}
            </SubPanelContainer>

        </div>
        , modalRoot)
}