import React from 'react';
import { useGlobalContext } from './context';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
            }`}>
            Sidebar
        </aside>
    )
}

export default Sidebar