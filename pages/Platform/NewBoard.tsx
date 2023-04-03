import React from "react";
import { AiOutlinePlus } from "react-icons/ai"
import styles from "./style.module.css"
const NewBoard: React.FC = () => {
    return (
        <section className={styles["newB-container"]}>
            <p>{null}</p>
            <div className={styles["content-flex"]}>
                <AiOutlinePlus />
                <h3>New Column</h3>
            </div>
        </section>
    )
}
export default NewBoard