import React from 'react'
import { useGlobalContext } from './context';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

    const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext();

    const displaySubmenu = (e) =>{
        const page = e.target.textContent; // return the values as product, developer etc when hover
        const tempBtn = e.target.getBoundingClientRect() //mainly used for returnig the location
        const center = (tempBtn.left + tempBtn.right) / 2 //return the center position 
        const bottom = tempBtn.bottom - 3;
        
        openSubmenu(page,{center,bottom});
        
    }

    const handleSubmenu = (e) =>{
        if(!e.target.classList.contains('link-btn'))
        closeSubmenu();
    }

    //if the class not containe link-btn then invoke the closeSubmenu() function

  return <nav className='nav' onMouseOver={handleSubmenu}>
    <div className="nav-center">
        <div className="nav-header">
            <img src={logo} className='nav-logo' alt="stripe" />
            <button className='btn toggle-btn' onClick={openSidebar}>
                <FaBars/>
            </button>
        </div>

        <ul className="nav-links">
            <li>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                    products
                </button>
            </li>

              <li>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                    developers
                </button>
            </li>

            <li>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                   company
                </button>
            </li>

        </ul>

        <button className='btn signin-btn'>Sign In</button>
    </div>


  </nav>
}

export default Navbar