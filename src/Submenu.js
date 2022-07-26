import React,{useState,useEffect,useRef} from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
    const {isSubmenuOpen, location} = useGlobalContext();

    const container = useRef(null) // using inline css in container

    useEffect(()=>{

    }, [location])
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' :
    'submenu'}`} ref={container}>
    Submenudddddddddddddd
</aside>    
  )
}

export default Submenu