import React from "react"
import styles from "./style.module.css"
import Layout from "../../component/Layout"
import BoardContainer from "./Board"
import NewBoard from "./NewBoard"
import { boardData } from "../../helpers/boardData"

const PlatformLaunch: React.FC = () => {
    return (
        <Layout>
            <main className={styles["p-container"]}>
                <section className={styles["board-flex"]}>
                    {boardData.map((board) => (
                        <BoardContainer key={board.id} data={board} />

                    ))}

                    <NewBoard />
                </section>
            </main>
        </Layout>
    )
}
export default PlatformLaunch