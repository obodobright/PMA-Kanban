import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import Modal from "../Modal";
import styles from "./task.module.css"
import { modalProps, boardItemProps } from "../../helpers/types";
import React, { useState } from "react";
import { produce } from "immer";
import { useContext } from "react"
import { BoardContext } from "@/app/context"


const NewTask: React.FC<modalProps> = ({ open, onClose }) => {
    const { dispatch, board } = useContext(BoardContext)
    const [title, setTitle] = useState("");
    const [descrips, setDescrips] = useState("")
    const [status, setStatus] = useState("");
    const [task, setTask] = useState([{ description: "" }])

    const addTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setTask([...task, { description: '' }])
        console.log("task added");
    }

    const checkForStatus = (status: string, dObj: boardItemProps) => {
        const myData = board.find((bd) => {
            if (bd.tag === status) {
                return bd.items?.push(dObj)
            }
        });


        console.log(myData, "the data here")
        return myData;
    }

    const handleSubmitTask = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const items = {
            title: title,
            description: descrips,
            id: 12,
            subtask: task
        }
        const filterPrevious = board.filter((data) => data.tag !== status);
        // [] add newdata tothe deleted position
        // console.log(filterPrevious, "filtered");
        // console.log([...filterPrevious, checkForStatus(status, items)], "this console")
        const prevData = [...filterPrevious, checkForStatus(status, items)]

        dispatch({
            type: "ADD_NEW_BOARD",
            payload: prevData,
        })
    }

    const removeOneTaskInput = (index: number) => {
        const allTask = [...task];
        allTask.splice(index, 1)
        setTask(allTask);
        console.log("click")
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
                        <input value={descrips} onChange={(e) => setDescrips(e.target.value)} type="text" placeholder="E.g Always take some good break" />
                    </section>
                    <section className={`${styles["input-wrapper"]} `}>
                        <label htmlFor="title">Substask</label>
                        {
                            task.map((tsk, i) => (
                                <div key={i} className={styles["input-wrapper-flex"]}>
                                    <input onChange={(e) => {
                                        const tskValue = e.target.value;
                                        setTask((currentInput) => produce(currentInput, (value) => {
                                            value[i].description = tskValue
                                        }))
                                    }} name={tsk.description} value={tsk.description} type="text" placeholder="E.g Take Coffe break" />
                                    <AiOutlineClose onClick={() => removeOneTaskInput(i)} color="#585E6A" fontSize={20} fontWeight={900} cursor={"pointer"} />
                                </div>
                            ))
                        }

                    </section>
                    <button onClick={addTask} className={`${styles.btn} ${styles["btn-subtask"]}`}>
                        <AiOutlinePlus />
                        <span>Add new Task</span>
                    </button>
                    <section className={styles["input-wrapper"]}>
                        <label htmlFor="title">Substask</label>
                        <select value={status} onChange={(e) => setStatus(e.target.value)} name="status" defaultValue={"Todo"}>
                            <option value="todo">Todo</option>
                            <option value="doing">Doing</option>
                            <option value="done">Done</option>
                        </select>
                    </section>
                    <button onClick={handleSubmitTask} className={`${styles.btn} ${styles["btn-create"]}`}>Create Task</button>
                </form>
            </main>
        </Modal>
    )
}
export default NewTask;