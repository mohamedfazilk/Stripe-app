import React,{useState,useEffect,useRef} from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
    const {isSubmenuOpen, location, 
        page:{page,links}} = useGlobalContext();

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
     <h4>{page}</h4>
</aside>    
  )
}

export default Submenu