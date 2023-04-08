import React, { useContext, useState } from "react"
import styles from "./nav.module.css"
import { AiOutlinePlus } from "react-icons/ai"
import { BsThreeDotsVertical } from "react-icons/bs"
import NewTask from "../NewTask"
import { BoardContext } from "@/app/context"
import { TfiLayoutSidebar2 } from "react-icons/tfi"
import { types } from "@/app/context/contextType"
interface navProp {
    title: string

}

const NavBar: React.FC<navProp> = ({ title }) => {
    const { nav, dispatch } = useContext(BoardContext);
    const [openModal, setOpenModal] = useState<boolean>(false);

    const modalObj = {
        handleOpenModal() {
            setOpenModal(true);
        },
        handleCloseModal() {
            setOpenModal(false);
        }
    };

    const showSideNav = () => {
        dispatch({
            type: types.toggleNav
        })
    }

    return (
        <>
            <NewTask open={openModal} onClose={modalObj.handleCloseModal} />
            <section style={{ position: "fixed", width: "100%" }}>
                <main className={styles["nav-container"]} style={{ marginLeft: nav ? "15rem" : "0rem" }}>
                    <section className={styles["nav-items"]}>
                        <div className={styles["top-nav-items"]}>
                            {!nav ? <TfiLayoutSidebar2 cursor={"pointer"} onClick={showSideNav} fontSize={25} color="#665EC6" /> : null}
                            <h2>{title}</h2>
                        </div>
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