/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useContext,createContext, useState} from "react";

const SingleUserContext=createContext({url:'',setUrl:()=>{}});

export const useSingleUser=()=>{
    return useContext(SingleUserContext);
}

export const SingleUserContextProvider=({children})=>{
    const [url,setUrl]=useState('');
    return(
        <SingleUserContext.Provider value={{url,setUrl}}>
            {children}
        </SingleUserContext.Provider>
    )
}