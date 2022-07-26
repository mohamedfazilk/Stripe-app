import React from 'react';
import { useGlobalContext } from './context';

const Sidebar = () => {
    const {isSidebarOpen, closeSidebar}= useGlobalContext();
  return (
    <div>Sidebar</div>
  )
}

export default Sidebar