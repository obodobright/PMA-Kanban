"use client"
import React from "react"
import styles from "./style.module.css"
import Layout from "../../component/Layout"
import BoardContainer from "./Board"
import NewBoard from "./NewBoard"
import { boardData } from "../../helpers/boardData"
// import { DndProvider } from "react-dnd"
// import { HTML5Backend } from "react-dnd-html5-backend"
import { useContext } from "react"
import { BoardContext } from "@/app/context"
import { Button } from "../../component/Button"
import { MyButton } from "../../component/Button/button"

const PlatformLaunch: React.FC = () => {
    const { board } = useContext(BoardContext);
    return (
        <Layout title="Platform Launch">
            {/* <DndProvider backend={HTML5Backend}> */}

            <section className="">
                <main className={styles["p-container"]} >
                    <section className={styles["board-flex"]}>
                        {board?.map((board) => (
                            <BoardContainer key={board?.id} data={board} />
                        ))}

                        <NewBoard />
                    </section>
                    <div>
                        <MyButton>hello</MyButton>
                    </div>
                    <Button className="outline" size="sm" >Get Started</Button>
                    <br />
                    {/* <button className="p-3 bg-[red] rounded text-white">Other Btn</button> */}
                </main>

            </section>
            {/* </DndProvider> */}
        </Layout>
    )
}
export default PlatformLaunch