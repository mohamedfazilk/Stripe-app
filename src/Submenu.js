import React,{useState,useEffect,useRef} from 'react'
import { useGlobalContext } from './context'

const Submenu = () => {
    const {isSubmenuOpen, location, 
        page:{page,links}} = useGlobalContext();

    const container = useRef(null) // using inline css in container
    const [column, setColumn] = useState('col-2')

    useEffect(()=>{
        setColumn('col-2')
        const submenu = container.current
        const {center, bottom} = location
        submenu.style.left = `${center}px`//center = left +right /2
        submenu.style.top = `${bottom}px` //top = bottom - 3px

        if (links.length === 3){
            setColumn('col-3')
        }

        if(links.length > 3){
            setColumn('col-4')
        }

    }, [location, column])
  return (
    <aside className={`${isSubmenuOpen ? 'submenu show' :
    'submenu'}`} ref={container}>
     <h4>{page}</h4>

     <div className={`submenu-center ${column}`}>
     {links.map((link, index)=>{
         const{label,icon,url} = link;
         return <a key={index} href={url}>
              {icon}
             {label}
            
         </a>
     })}

     </div>
    
</aside>    
  )
}

export default Submenu