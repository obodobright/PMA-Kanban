import { useState } from "react";
import styles from "./style.module.css";
import { subtaskProp } from "../../helpers/types";

interface taskProp {
    task: subtaskProp
}

const SubtaskCard: React.FC<taskProp> = ({ task }) => {
    const [isChecked, setIsChecked] = useState(false);
    return (
        <div className={styles['sub-card']}>
            <input className={isChecked ? styles["checked"] : ""} onChange={() => setIsChecked((prev) => !prev)} type="checkbox" checked={isChecked} />
            <span style={isChecked ? { textDecoration: "line-through", color: "#74767d" } : { color: "#fff", textDecoration: "normal" }}>{task.description}</span>
        </div>
    )
}

export default SubtaskCard;