"use client";
import Layout from "../../component/Layout"
import { useContext } from "react";
import { BoardContext } from "@/app/context";
import Button from "../../component/Button";

const MarketingPage = () => {
    const { nav } = useContext(BoardContext)
    return (
        <Layout title="Marketing Launch">
            <main>
                <h3>Marketing Launch</h3>
                <div>
                    <Button></Button>
                </div>
            </main>
        </Layout>
    )
}
export default MarketingPage;