import React from 'react'
import { NavLink } from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { BsInstagram } from "react-icons/bs";
import { VscGithub } from "react-icons/vsc";
import { LiaTelegram } from "react-icons/lia";
import resume from '../../assets/resume.pdf'

import './HomePage.scss'

function HomePage() {
    const [text] = useTypewriter({
        words: ['Boltabekov Jakhongir.','Front-end developer.'],
        loop:{},
    })
  return (
    <section id='home'>
        <div className='Home_div'>
            <div className="socialMedia">
                <ul>
                    <NavLink to={'https://www.instagram.com/jakhon.jasurvc'}><li><BsInstagram className='social_icon' />Insatgram</li></NavLink>
                    <NavLink to={'https://github.com/jahongirboltabekov'}><li><VscGithub className='social_icon' />GitHub</li></NavLink>
                    <NavLink to={'https://t.me/JakhonJasurvich'}><li><LiaTelegram className='social_icon' />Telegram</li></NavLink>
                </ul>
            </div>
            <div className="container_2">
                <div className="home">
                    <h1 className='home_h1'>WELCOME &nbsp; TO &nbsp; MY &nbsp; PORTFOLIO !</h1>
                    <h2 className='home_h2'>I'm a &nbsp;  
                        <span></span> 
                        <span> {text}<Cursor/></span>
                    </h2>
                    <p className='home_p'>
                        I live in Uzbekistan's capital Tashkent. I make front-end websites. I have no work experience. But I have love and determination for my work. Nothing is impossible for me. Just have to try
                    </p>
                    <div className="homeButtons">
                        <a href="#contact">
                            <button type='submit' className="btn">Contact Me</button>
                        </a>
                        <a href="" download={resume}>
                            <button type='submit' className="btn">Download cv</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomePage