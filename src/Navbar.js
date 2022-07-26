import React from 'react'
import { useGlobalContext } from './context';
import logo from './images/logo.svg';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {

    const {openSidebar,openSubmenu,closeSubmenu} = useGlobalContext();

  return <nav className='nav'>
    <div className="nav-center">
        <div className="nav-header">
            <img src={logo} className='nav-logo' alt="stripe" />
            <button className='btn toggle-btn'>
                <FaBars/>
            </button>

        </div>
        <ul className="nav-links">

        </ul>
    </div>


  </nav>
}

export default Navbar