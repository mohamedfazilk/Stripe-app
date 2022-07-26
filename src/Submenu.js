import React,{useState,useEffect,useRef} from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
    const {isSubmenuOpen} = useGlobalContext();
  return (
    <div>Submenu</div>
  )
}

export default Submenu