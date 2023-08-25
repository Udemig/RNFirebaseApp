import {createContext,useState}  from 'react'

const Data=createContext()

const DataProvider=({children})=>{

const[user,setUser]=useState(false)


    return(
        <Data.Provider
        
        value={{
            user,
            setUser
        }}
        
        
        >{children}</Data.Provider>
    )
}

export{Data,DataProvider}