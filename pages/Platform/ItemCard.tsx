"use client"

import React from "react"
import styles from "./style.module.css"
import { useRef } from "react";
import { boardItemProps } from "../../helpers/types";
import { useDrag } from "react-dnd"
interface itemProp {
    data: boardItemProps;
    ref: React.Ref<HTMLDivElement>;
    onDragStart: (e: React.DragEvent, position: any) => void;
    index: number;
}

const ItemCard: React.FC<itemProp> = ({ data, index, ref, onDragStart }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "boardItem",
        item: data,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

    return (
        <div style={isDragging ? { border: "1px solid pink" } : { border: "0px" }} className={styles["items-card"]} ref={drag}>
            <h5>{data.title}</h5>
            <p>{data.description}</p>
        </div>
    )
}
export default ItemCard