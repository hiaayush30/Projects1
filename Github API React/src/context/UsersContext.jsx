/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const UsersContext=createContext({
    users: [],
    setUsers: () => {}
});

export const useUsersContext=()=>{
    return useContext(UsersContext);
}

export const UsersContextProvider=({children})=>{
    const [users,setUsers]=useState([]);
    return(
        <UsersContext.Provider value={{users,setUsers}}>
            {children}
        </UsersContext.Provider>
    )
}