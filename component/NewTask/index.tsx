import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import Modal from "../Modal";
import styles from "./task.module.css"
import { modalProps } from "../../helpers/types";
import React, { useState } from "react";
const NewTask: React.FC<modalProps> = ({ open, onClose }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("")
    const [task, setTask] = useState("");

    const addTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("task added");
    }

    const handleSubmitTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log({
            title, description, task
        })
    }


    return (
        <Modal onClose={onClose} open={open}>
            <main className={styles.container}>
                <h3>Add New Task</h3>
                <form>
                    <section className={styles["input-wrapper"]}>
                        <label htmlFor="title">Title</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" placeholder="E.g Take Coffe break" />
                    </section>
                    <section className={styles["input-wrapper"]}>
                        <label htmlFor="Dscription">Description</label>
                        <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" placeholder="E.g Always take some good break" />
                    </section>
                    <section className={`${styles["input-wrapper"]} `}>
                        <label htmlFor="title">Substask</label>
                        <div className={styles["input-wrapper-flex"]}>
                            <input type="text" placeholder="E.g Take Coffe break" />
                            <AiOutlineClose color="#585E6A" fontSize={20} fontWeight={900} cursor={"pointer"} />

                        </div>
                    </section>
                    <button onClick={addTask} className={`${styles.btn} ${styles["btn-subtask"]}`}>
                        <AiOutlinePlus />
                        <span>Add new Task</span>
                    </button>
                    <section className={styles["input-wrapper"]}>
                        <label htmlFor="title">Substask</label>
                        <select value={task} onChange={(e) => setTask(e.target.value)} name="status" defaultValue={"Todo"}>
                            <option value="todo">Todo</option>
                            <option value="todo">Doing</option>
                            <option value="todo">Done</option>
                        </select>
                    </section>
                    <button onClick={handleSubmitTask} className={`${styles.btn} ${styles["btn-create"]}`}>Create Task</button>
                </form>
            </main>
        </Modal>
    )
}
export default NewTask;