import React, { useContext } from "react"
import NavBar from "../Navbar"
import Sidebar from "../Sidebar"
import { BoardContext } from "@/app/context";
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
            </section>
            <section style={{ marginLeft: nav ? "16rem" : "0rem", marginTop: "5rem", }}>
                {children}

            </section>
        </main>
    )
}
export default Layout


