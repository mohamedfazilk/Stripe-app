import React,{useState,useEffect,useRef} from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
    const {isSubmenuOpen, location} = useGlobalContext();

    const container = useRef(null) // using inline css in container

    useEffect(()=>{
        const submenu = container.current
        const {center, bottom} = location
        submenu.style.left = `${center}px`//center = left +right /2
        submenu.style.top = `${bottom}px` //top = bottom - 3px

    }, [location])
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' :
    'submenu'}`} ref={container}>
    Submenudddddddddddddd
</aside>    
  )
}

export default Submenu