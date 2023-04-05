import React, { useState } from "react"
import styles from "./nav.module.css"
import { AiOutlinePlus } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"
import NewTask from "../NewTask"

const NavBar: React.FC = () => {
    const [openModal, setOpenModal] = useState<boolean>(false);

    const modalObj = {
        handleOpenModal() {
            setOpenModal(true);
        },
        handleCloseModal() {
            setOpenModal(false);
        }
    };

    return (
        <>
            <NewTask open={openModal} onClose={modalObj.handleCloseModal} />
            <section style={{ position: "fixed", width: "100%" }}>
                <main className={styles["nav-container"]}>
                    <section className={styles["nav-items"]}>
                        <h2>Platform Launch</h2>
                        <div className={styles["right-bar"]}>
                            <button className={styles.btn} onClick={modalObj.handleOpenModal}>
                                <AiOutlinePlus />
                                <span>Add new Task</span>
                            </button>
                            <span>
                                <BsThreeDotsVertical />
                            </span>
                        </div>
                    </section>
                </main>
            </section>
        </>
    )
}
export default NavBar;