import React from 'react'
import img_me from '../../assets/me.jpg'
import { NavLink } from 'react-router-dom'
import './Navbar.scss'

function Navbar() {
  return (
    <div className='Navbar'>
        <div className="container_1">
            <nav>
                <div className="img_me_div">
                    <NavLink to={'/'}><img className='img_me' src={img_me} alt="" /></NavLink>
                    <NavLink><p className='p_me'>BOLTABEKOV JAKHONGIR</p></NavLink>
                </div>
                <ul>
                   <NavLink><li>HOME</li></NavLink>
                   <NavLink><li>ABOUT ME</li></NavLink>
                   <NavLink><li>PROJECTS</li></NavLink>
                   <NavLink><li>CONTACT</li></NavLink>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar