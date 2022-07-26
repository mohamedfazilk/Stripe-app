import React,{useState,useContext} from 'react'
import sublinks from './data'


const Appcontext = React.createContext();

export const AppProvider = ({children}) => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
    const [location, setLocation] = useState({});
    const [page, setPage] = useState({page:'', links:[]})
    
    const openSidebar = () => {
        setIsSidebarOpen(true);
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false);
    }

    const openSubmenu = (text,coordinates ) => {
        const page = sublinks.find((link) => link.page === text) //checking if the button values is same for link value
        setPage(page)
        setLocation(coordinates);
        setIsSubmenuOpen(true);
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false);
    }

    

    return <Appcontext.Provider value={
        {isSidebarOpen,
        isSubmenuOpen
        ,openSidebar,
        openSubmenu,
    closeSidebar,
    closeSubmenu,
    location, 
    page
    }}>{children}
    </Appcontext.Provider>

}

export const useGlobalContext = () =>{
    return useContext(Appcontext)
}





