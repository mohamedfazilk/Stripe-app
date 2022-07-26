import React,{useState,useEffect,useRef} from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
    const {isSubmenuOpen, location} = useGlobalContext();

    useEffect(()=>{

    }, [location])
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' :
    'submenu'}`}>
    Submenudddddddddddddd
</aside>    
  )
}

export default Submenu