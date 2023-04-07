"use client"

import React, { useState } from "react"
import styles from "./style.module.css"
import { useRef } from "react";
import { boardItemProps } from "../../helpers/types";
import { useDrag } from "react-dnd"
import CardDetails from "./CardDetails";
interface itemProp {
    data: boardItemProps;
}

const ItemCard: React.FC<itemProp> = ({ data, }) => {
    const [openModal, setOpenModal] = useState<boolean>(false);
    const obj = {
        handleOpen() {
            setOpenModal(true);
        },
        handleCloseModal() {
            setOpenModal(false);
        }
    };

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "boardItem",
        item: data,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

    return (
        <>
            <CardDetails data={data} onClose={obj.handleCloseModal} open={openModal} />
            <div onClick={obj.handleOpen} style={isDragging ? { border: "1px solid pink" } : { border: "0px" }} className={styles["items-card"]} ref={drag}>
                <h5>{data.title}</h5>
                <p style={{ fontSize: "0.8rem" }}>{0} of {data.subtask?.length} subtask</p>
            </div>
        </>
    )
}
export default ItemCard