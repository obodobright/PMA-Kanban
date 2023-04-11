"use client"
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css"
import { boardProps } from "../../helpers/types";
import ItemCard from "./ItemCard";


interface boardProp {
    data: boardProps;
}
const BoardContainer: React.FC<boardProp> = ({ data }) => {
    const [board, setBoard] = useState(data)

    return (
        <main>
            <div className={styles["board-wrapper"]} >
                <span className={styles["board-top-flex"]} >
                    <div className={`${styles.rounded} `} style={{ backgroundColor: data?.tagColor }} />
                    <h4>{data?.tag} ({data?.items?.length})</h4>
                </span>
            </div>
            {board?.items?.map((dt, i) => (
                <ItemCard key={i} data={dt} tag={data.tag} />
            ))}
        </main>

    )
}
export default BoardContainer