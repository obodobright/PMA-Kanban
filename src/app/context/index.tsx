"use client";

import { createContext, useReducer } from "react"
import { boardData } from "../../../helpers/boardData";
import { types } from "./contextType";
export const BoardContext = createContext({
    board: boardData,
    nav: true
});


const reducerFunction = (state: any, action: any) => {
    switch (action.type) {
        case types.addBoard:
            return { ...state, board: action.payload };
        case types.addColumn:
            return { ...state, board: action.payload }
        case types.toggleNav:
            return { ...state, nav: !state.nav };
        default:
            return { ...state }
    }
}

interface provProps {
    children: React.ReactNode
}

const BoardProvider: React.FC<provProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunction, { board: boardData, nav: true });
    return <BoardContext.Provider value={{ ...state, dispatch }}>{children}</BoardContext.Provider>
}
export default BoardProvider;