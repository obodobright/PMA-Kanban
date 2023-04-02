import styles from "./styles.module.css"
import { TfiLayoutSidebar2 } from "react-icons/tfi"
import { TbBrandFramer } from "react-icons/tb"
const Sidebar = () => {
    return (
        <main className={styles.sidebar}>
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
                    </ul>
                </div>
            </section>
        </main>
    )
}
export default Sidebar;