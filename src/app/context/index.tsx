"use client";

import { createContext, useReducer } from "react"
import { boardData } from "../../../helpers/boardData";

export const BoardContext = createContext({
    board: boardData,

});


const reducerFunction = (state: any, action: any) => {
    switch (action.type) {
        case "ADD_NEW_BOARD":
            return { ...state, board: action.payload };
        case "ADD_COLUMN":
            return { ...state, board: action.payload }
        case "DELETE_BOARD":
            return { ...state, board: action.payload };
        default:
            return { ...state }
    }
}

interface provProps {
    children: React.ReactNode
}

const BoardProvider: React.FC<provProps> = ({ children }) => {
    const [state, dispatch] = useReducer(reducerFunction, { board: boardData });
    return <BoardContext.Provider value={{ ...state, dispatch }}>{children}</BoardContext.Provider>
}
export default BoardProvider;