import React from 'react';
import { useGlobalContext } from './context';
import { FaTimes } from 'react-icons/fa'
import sublinks from './data';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useGlobalContext();
    return (
        <aside className={`${isSidebarOpen ? 'sidebar-wrapper show' : 'sidebar-wrapper'
            }`}>
            <div className="sidebar">
                <button className='close-btn' onClick={closeSidebar}>
                    <FaTimes />
                </button>

                <div className="sidebar-links">
                    {sublinks.map((item, index) => {
                        const { page,links} = item; 
                        //iterating sublink =[  //need double iteration
                        // {1.page: 2.links:[]}]
                        return (
                            <article key={index}>
                                <h4>{page}</h4>
                           <div className="sidebar-sublinks">
                               {links.map((link,index)=>{
                                   const{url,label,icon} = link;
                                   return(
                                       <a key={index} href={url}>
                                           {icon}
                                           {label}
                                       </a>
                                   )
                               })}
                           </div>

                            </article>
                            
                        ) 
                    })}
                </div>
            </div>
        </aside >
    )
}

export default Sidebar