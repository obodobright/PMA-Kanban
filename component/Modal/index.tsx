import React from "react";
import styles from "./modal.module.css"
import type { ComponentPropsWithoutRef } from "react";
interface cProps extends ComponentPropsWithoutRef<"div"> {
    children: React.ReactNode;
    open: boolean;
    onClose: () => void;
}

const Modal: React.FC<cProps> = ({ children, open, onClose, ...props }) => {

    return (
        open ? <>
            <main className={styles["modal-container"]} {...props} onClick={onClose} />
            <section className={styles["modal-wrapper"]}>{children}</section>
        </> : null
    )
}
export default Modal;