import styles from "./styles.module.css"
import { TfiLayoutSidebar2 } from "react-icons/tfi"
import { TbBrandFramer } from "react-icons/tb"
import { WiDaySunny } from "react-icons/wi"
import { BsCloudMoon } from "react-icons/bs"
import { useState } from "react"
import { AiFillEyeInvisible } from "react-icons/ai"
import { useContext } from "react"
import { BoardContext } from "@/app/context"
import { types } from "@/app/context/contextType"
const Sidebar = () => {
    const { nav, dispatch } = useContext(BoardContext)
    const [toggle, setToggle] = useState(false);

    const handleThemeToggle = () => {
        setToggle(!toggle)
    }

    const sidebarToggle = () => {
        dispatch({
            type: types.toggleNav
        })
    }
    return (
        <>
            {nav ? <main className={styles.sidebar}>
                <section className={styles["sidebar-wrapper"]}>
                    <div className={styles["logo-container"]}>
                        <TfiLayoutSidebar2 fontSize={25} color="#665EC6" />
                        <h3>Kanban</h3>
                    </div>
                    <div className={styles["nav-container"]}>
                        <h5>All Boards (8)</h5>
                        <ul>
                            <li className={styles["nav-active"]}>

                                <TbBrandFramer />
                                <p>Platform Launch</p>

                            </li>
                            <li>

                                <TbBrandFramer />
                                <p>Marketing Launch</p>

                            </li>
                            <li>

                                <TbBrandFramer />
                                <p>Roadmap</p>

                            </li>
                            <li className={styles["li-create"]}>

                                <TbBrandFramer />
                                <p> + Create New Board</p>

                            </li>
                            <section className={styles["other-section"]}>
                                <div className={styles.theme}>
                                    <WiDaySunny cursor={"pointer"} fontSize={20} />
                                    <div role="button" onClick={handleThemeToggle} className={styles["theme-toggle"]}>
                                        <div className={styles["inner-btn"]} style={toggle ? { right: 0 } : { left: 0 }}></div>
                                    </div>
                                    <BsCloudMoon cursor={"pointer"} fontSize={20} />
                                </div>
                                <div className={styles["bar-dislay"]} role="button" onClick={sidebarToggle}>
                                    <AiFillEyeInvisible />
                                    <span>Hide sidebar</span>
                                </div>
                            </section>

                        </ul>
                    </div>

                </section>
            </main> : null}

        </>
    )
}
export default Sidebar;