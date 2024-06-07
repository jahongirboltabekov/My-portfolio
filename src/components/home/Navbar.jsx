import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import img_me from '../../assets/me.jpg'
import { TiThMenu } from "react-icons/ti";
import './Navbar.scss'


function Navbar() {
  const [menu, setMenu] = useState(false);


  return (
    <div className='Navbar'>
        <div className="container_1">
            <nav>
                <div className="img_me_div">
                  <NavLink to={'/'}><img className='img_me' src={img_me} alt="" /></NavLink>
                  <NavLink to={'/'}><p className='p_me'>BOLTABEKOV JAKHONGIR</p></NavLink>
                  <TiThMenu onClick={() => setMenu(!menu)} className='menus' />
                </div>
                <ul className={`ul_link ${menu ? "show" : ""}`}>
                  <a href='#home'><li>HOME</li></a>
                  <a href='#about'><li>ABOUT ME</li></a>
                  <a href='#project'><li>PROJECTS</li></a>
                  <a href='#contact'><li>CONTACT</li></a>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar