import Modal from "../../component/Modal";
import { modalProps, boardItemProps } from "../../helpers/types";
import SubtaskCard from "./SubtaskCard";
import styles from "./style.module.css"

interface detailsProp extends modalProps {
    data: boardItemProps;
}

const CardDetails: React.FC<detailsProp> = ({ data, open, onClose }) => {
    return (
        <Modal onClose={onClose} open={open}>
            <main className={styles["card-container"]}>
                <h3>{data?.title}</h3>
                <p>{data?.description}</p>
                <div className={styles["sub-wrapper"]}>
                    <h5>Subtasks({data?.subtask?.length})</h5>
                    {
                        data?.subtask?.map((task) => (
                            <SubtaskCard key={task?.id} task={task} />
                        ))
                    }

                </div>
                <div className={styles["sub-wrapper"]}>
                    <h5>Status</h5>

                    <section className={styles["status-input"]}>
                        <label htmlFor=""></label>
                        <select name="status" id="status">
                            <option value="todo">Todo</option>
                            <option value="todo">Doing</option>
                            <option value="todo">Done</option>
                        </select>
                    </section>
                </div>
            </main>
        </Modal>
    )
}
export default CardDetails;