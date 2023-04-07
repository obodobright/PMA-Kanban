"use client"
import React, { useEffect, useRef, useState } from "react";
import styles from "./style.module.css"
import { boardProps } from "../../helpers/types";
import ItemCard from "./ItemCard";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend"
import { useDrop } from "react-dnd"
import { boardItemProps } from "../../helpers/types";

interface boardProp {
    data: boardProps;
}
const BoardContainer: React.FC<boardProp> = ({ data }) => {
    const [board, setBoard] = useState(data)
    // const [{ isOver }, drop] = useDrop(() => ({
    //     accept: "boardItem",
    //     drop: (item: any) => addItemToBoard(item.id),
    //     collect: (monitor) => ({
    //         isOver: !!monitor.isOver(),
    //     })
    // }))

    // const addItemToBoard = (id: any) => {
    //     console.log(id, `id ${id} was moved`);
    //     const itemList = data.items?.filter((item) => {
    //         console.log(id, item.id, "this is it")
    //         if (id === item.id) {
    //             console.log(id, item, item.id);
    //             return item;
    //         }
    //     });
    //     console.log(itemList, "the item dragged")
    //     setBoard((prev) => ({
    //         ...prev,
    //         items: [...prev.items, itemList]
    //     }))
    //     console.log(board, "the main board")
    // }

    return (
        // <main ref={drop}>
        <main>
            <div className={styles["board-wrapper"]} >
                <span className={styles["board-top-flex"]} >
                    <div className={`${styles.rounded} `} style={{ backgroundColor: data.tagColor }} />
                    <h4>{data.tag} ({data.items?.length})</h4>
                </span>
            </div>
            {board.items?.map((dt, i) => (
                <ItemCard key={i} data={dt} />
            ))}
        </main>

    )
}
export default BoardContainer