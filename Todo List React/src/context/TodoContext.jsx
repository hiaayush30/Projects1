/* eslint-disable no-unused-vars */
import { createContext, useState } from "react";

export const todoContext=createContext(null);

// eslint-disable-next-line react/prop-types
export const TodoContextProvider=({children})=>{
    const [todos,setTodos]=useState([]);
    return(
        <todoContext.Provider value={{todos,setTodos}}>
            {children}
        </todoContext.Provider>
    )
}
