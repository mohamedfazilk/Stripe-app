import React,{useState,useContext} from 'react'
import sublinks from './data'


const Appcontext = React.createContext();

export const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    
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

    

    return <Appcontext.Provider value={{isSidebarOpen,isSubmenuOpen,openSidebar,openSubmenu,
    closeSidebar,closeSubmenu}}>{children}
    </Appcontext.Provider>

}

export const useGlobalContext = () =>{
    return useContext(Appcontext)
}





