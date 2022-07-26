import React,{useState,useContext} from 'react'
import sublinks from './data'


const Appcontext = React.createContext();

const AppProvider = ({children}) => {

    return <Appcontext.Provider value='hi'>{children}
    </Appcontext.Provider>

}

const useGlobalContext = () =>{
    return useContext(Appcontext)
}

export{Appcontext,AppProvider}



