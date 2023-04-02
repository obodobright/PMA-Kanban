import React from "react";
import styles from "./style.module.css"
import { boardProps } from "../../helpers/types";
import ItemCard from "./ItemCard";

interface boardProp {
    data: boardProps;
}
const BoardContainer: React.FC<boardProp> = ({ data }) => {
    return (
        <main>
            <div className={styles["board-wrapper"]}>
                <span className={styles["board-top-flex"]} >
                    <div className={`${styles.rounded} `} style={{ backgroundColor: data.tagColor }} />
                    <h4>{data.tag} ({data.total})</h4>
                </span>
            </div>
            <ItemCard />
        </main>
    )
}
export default BoardContainer