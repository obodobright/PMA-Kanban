import React, { useContext } from "react"
import NavBar from "../Navbar"
import Sidebar from "../Sidebar"
import { BoardContext } from "@/app/context";
import styles from "./styles.module.css"
interface Props {
    children?: React.ReactNode;
    title: string
}

const Layout: React.FC<Props> = ({ children, title }) => {
    const { nav } = useContext(BoardContext);
    return (
        <main>
            <section style={{ display: "flex" }}>
                <Sidebar />
                <NavBar title={title} />
                {/* tyle={{ marginLeft: nav ? "16rem" : "0rem", marginTop: "5rem", }} */}
            </section>
            <section className={nav ? styles["sidebar-container-open"] : styles["sidebar-container-close"]}>
                {children}
            </section>
        </main>
    )
}
export default Layout


