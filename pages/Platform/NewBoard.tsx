import React, { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai"
import styles from "./style.module.css"
import NewBoardModal from "../../component/NewTask/NewBoardModal";
const NewBoard: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const obj = {
        handleOpenModal() {
            setOpenModal(true)
        },
        handleCloseModal() {
            setOpenModal(false)
        }
    }

    return (
        <>
            <  NewBoardModal open={openModal} onClose={obj.handleCloseModal} />
            <section className={styles["newB-container"]}>
                <p>{null}</p>
                <div role="button" onClick={obj.handleOpenModal} className={styles["content-flex"]}>
                    <AiOutlinePlus />
                    <h3>New Column</h3>
                </div>
            </section>
        </>
    )
}
export default NewBoard