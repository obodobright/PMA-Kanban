import Modal from "../Modal"
import styles from "./task.module.css"
import { modalProps } from "../../helpers/types"
import React, { useContext, useState } from "react";
import { colors } from "../../helpers/color";
import { colorProp, boardProps } from "../../helpers/types";
import { BoardContext } from "@/app/context";
import { types } from "@/app/context/contextType";


const NewBoardModal: React.FC<modalProps> = ({ open, onClose }) => {
    const { board, dispatch } = useContext(BoardContext);
    const [title, setTitle] = useState("");
    const [color, setColor] = useState<colorProp>({});


    const getColor = (cl: colorProp) => {
        setColor(cl)
    }

    const addNewActivity = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const items: boardProps = {
            id: board.length + 1,
            tag: title,
            tagColor: color.color as string,
            items: []
        }

        const allData = [...board, items];
        dispatch({
            type: types.addColumn,
            payload: allData
        })
        setTitle("");
        setColor({});
        onClose();
    }

    return (
        <Modal open={open} onClose={onClose}>
            <main className={styles.container}>
                <h3>Add New Activity</h3>
                <form>
                    <section className={styles["input-wrapper"]}>
                        <label htmlFor="title">Activity name</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="E.g todo" />
                    </section>
                    <section className={styles["input-wrapper"]}>
                        <label htmlFor="">Activity indicator</label>
                        <section className={styles["color-wrapper"]}>
                            {
                                colors?.map((cl, i) => (
                                    <div role="button" onClick={() => getColor(cl)} key={i} className={styles["color-box"]} style={{ borderColor: cl?.color, borderWidth: color?.color === cl?.color ? "3px" : "1px" }}>
                                        <div className={styles.rounded} style={{ backgroundColor: cl?.color }} ></div>
                                    </div>
                                ))
                            }

                        </section>
                    </section>
                    <button onClick={addNewActivity} className={`${styles.btn} ${styles["btn-create"]}`}>Create Task</button>
                </form>
            </main>
        </Modal>
    )
}
export default NewBoardModal