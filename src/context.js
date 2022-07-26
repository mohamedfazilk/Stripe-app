import React,{useState,useContext} from 'react'
import sublinks from './data'


const Appcontext = React.createContext();

const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(true);
    
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = () => {
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    

    return <Appcontext.Provider value='hi'>{children}
    </Appcontext.Provider>

}

const useGlobalContext = () =>{
    return useContext(Appcontext)
}

export{Appcontext,AppProvider}



