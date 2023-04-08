"use client";
import Layout from "../../component/Layout"
import { useContext } from "react";
import { BoardContext } from "@/app/context";

const MarketingPage = () => {
    const { nav } = useContext(BoardContext)
    return (
        <Layout title="Marketing Launch">
            <main>
                Marketing Launch
            </main>
        </Layout>
    )
}
export default MarketingPage;