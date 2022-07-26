import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa'

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
            }`}>
            <div className="sidebar">
                <button className='close-btn'>
                    <FaTimes />
                </button>
            </div>
        </aside >
    )
}

export default Sidebar