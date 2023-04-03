"use client"
import React from "react"
import styles from "./style.module.css"
import Layout from "../../component/Layout"
import BoardContainer from "./Board"
import NewBoard from "./NewBoard"
import { boardData } from "../../helpers/boardData"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

const PlatformLaunch: React.FC = () => {
    return (
        <Layout>
            <DndProvider backend={HTML5Backend}>
                <main className={styles["p-container"]}>
                    <section className={styles["board-flex"]}>
                        {boardData.map((board) => (
                            <BoardContainer key={board.id} data={board} />
                        ))}

                        <NewBoard />
                    </section>
                </main>
            </DndProvider>
        </Layout>
    )
}
export default PlatformLaunch