import React from 'react'
import { NavLink } from 'react-router-dom'
import img_me from '../../assets/me.jpg'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="container_1">
            <nav>
                <div className="img_me_div">
                    <NavLink to={'/'}><img className='img_me' src={img_me} alt="" /></NavLink>
                    <NavLink to={'/'}><p className='p_me'>BOLTABEKOV JAKHONGIR</p></NavLink>
                </div>
                <ul>
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