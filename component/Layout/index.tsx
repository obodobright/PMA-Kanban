import React from "react"
import NavBar from "../Navbar"
import Sidebar from "../Sidebar"

interface Props {
    children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <main>
            <section style={{ display: "flex" }}>
                <Sidebar />
                <NavBar />
            </section>
            {children}
        </main>
    )
}
export default Layout
