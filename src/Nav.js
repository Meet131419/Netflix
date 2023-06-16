import React, { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import './Nav.css'

const Nav = () => {
  
  const [show,handleShow] = useState(false)
  const history = useHistory();

  const transitionNavbar = ()=>{
    if(window.scrollY > 100){
      handleShow(true)
    }
    else{
      handleShow(false)
    }
  }
   useEffect(()=>{
    window.addEventListener("scroll",transitionNavbar)
    return () => window.removeEventListener("scroll",transitionNavbar)
   },[])



  return (
    <div className={`nav ${show && 'nav_black'}` }>
      <div className='nav_contents'>
        <img 
         onClick={() => history.push("/")}
        className='nav_logo'src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' alt=''/>
        <img 
        onClick={() => history.push("/profile")}
        className='nav_avatar' src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117' alt=''/>


        </div>
    </div>
  )
}

export default Nav