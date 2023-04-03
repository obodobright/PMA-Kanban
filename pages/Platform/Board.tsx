"use client"
import React, { useRef, useState } from "react";
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
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "boardItem",
        drop: (item: any) => addItemToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        })
    }))

    const addItemToBoard = (id: any) => {
        console.log(id, `id ${id} was moved`);
        const itemList = data.items?.filter((item) => id === item.id);
        setBoard((prev) => ({
            ...prev,
            items: [...prev.items, itemList]
        }))
    }
    const dragRef = useRef(null);

    const onDragStart = (e: React.DragEvent, position?: any) => {
        dragRef.current = position;
        e.dataTransfer.setData("item", position)
        // console.log(e.target.value);
        console.log(position, "position")
    }

    return (
        <main ref={drop}>
            <div className={styles["board-wrapper"]} >
                <span className={styles["board-top-flex"]} >
                    <div className={`${styles.rounded} `} style={{ backgroundColor: data.tagColor }} />
                    <h4>{data.tag} ({data.total})</h4>
                </span>
            </div>
            {board.items?.map((dt, i) => (
                <ItemCard index={i} onDragStart={onDragStart} ref={dragRef} key={i} data={dt} />
            ))}

        </main>

    )
}
export default BoardContainer