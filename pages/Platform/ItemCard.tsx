"use client"

import React, { useContext, useState } from "react"
import styles from "./style.module.css"
import { useRef } from "react";
import { boardItemProps } from "../../helpers/types";
import { useDrag } from "react-dnd"
import CardDetails from "./CardDetails";
import { BoardContext } from "@/app/context";
import { boardData } from "../../helpers/boardData";
interface itemProp {
    data: boardItemProps;
    tag: string;
}

const ItemCard: React.FC<itemProp> = ({ data, tag }) => {
    const { board } = useContext(BoardContext);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false)
    const [list, setList] = useState(board);



    const draggedCardEnd = (data: boardItemProps) => {

        setIsDragging(false);
        // console.log(data, "start dragging");
    }

    const draggedCard = (status: string, id: number) => {
        // console.log(data, "end dragging");
        setIsDragging(true);
        const filter = list.filter((data) => data.tag === status).map((data) => data.items);
        let removeItem = filter[0]?.filter((data) => data.id !== id);
        console.log(removeItem, "item removed")
        console.log(list, "lists");
        return removeItem;

    }

    const updateList = (id: number, tag: string) => {
        const filter = board.filter((data) => data.tag === "todo").map((data) => data.items);

    }

    const obj = {
        handleOpen() {
            setOpenModal(true);
        },
        handleCloseModal() {
            setOpenModal(false);
        }
    };
    return (
        <>
            <CardDetails data={data} onClose={obj.handleCloseModal} open={openModal} />
            <div style={isDragging ? { border: "1px solid pink" } : { border: "0px" }} onClick={obj.handleOpen} className={styles["items-card"]} draggable onDragStart={() => draggedCard(tag, data.id)} onDragEnd={() => draggedCardEnd(data)}>
                <h5>{data?.title}</h5>
                <p style={{ fontSize: "0.8rem" }}>{0} of {data?.subtask?.length} subtask</p>
            </div>
        </>
    )
}
export default ItemCard