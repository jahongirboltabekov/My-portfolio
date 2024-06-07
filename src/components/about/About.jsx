import React from 'react'
import css from '../../assets/css.webp'
import sass from '../../assets/sass.png'
import js from '../../assets/js.png'
import react from '../../assets/react.svg'
import axios from '../../assets/axios.svg'
import git from '../../assets/git.png'
import mui from '../../assets/mui.png'
import next from '../../assets/next.svg'
import redux from '../../assets/redux.jpg'
import ts from '../../assets/ts.png'
import tailwind from '../../assets/tailwindcss.svg'
import html from '../../assets/html.png'


import './About.scss'

function About() {
  return (
    <section id='about'>
        <div className='About_div'>
            <div className="container_2">
                <div className="about">
                    <div className="about_text">
                        <h1 className="about_h1">About Me</h1>
                        <p className='about_p'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
                    </div>
                    <div className="double_div">
                        <div className="information">
                            <h3 className="about_h3">Get to know me!</h3>
                            <p className='about_p2'>I'm Frontend Web-Developer. I make responsive websites and web-applications for various educational projects, E-commerce projects and clients. I am passionate about learning new technologies and improving my skills and I also collaborate with backend developers, designers, and project managers to ensure the quality and functionality of the web products.</p>
                        </div>
                        <div className="skills">
                            <h3 className="about_h3">My Skills</h3>
                            <div className="skill_cards">
                                <div className="card">
                                    <img  src={css} alt="" />
                                    <p>Css</p>
                                </div>
                                <div className="card">
                                    <img  src={sass} alt="" />
                                    <p>Sass</p>
                                </div>
                                <div className="card">
                                    <img  src={js} alt="" />
                                    <p>JavaScript</p>
                                </div>
                                <div className="card">
                                    <img  src={react} alt="" />
                                    <p>React Js</p>
                                </div>
                                <div className="card">
                                    <img  src={axios} alt="" />
                                    <p>Axios</p>
                                </div>
                                <div className="card">
                                    <img  src={git} alt="" />
                                    <p>GitHub</p>
                                </div>
                                <div className="card">
                                    <img  src={mui} alt="" />
                                    <p>MaterialUI</p>
                                </div>
                                <div className="card">
                                    <img  src={next} alt="" />
                                    <p>Next Js</p>
                                </div>
                                <div className="card">
                                    <img  src={redux} alt="" />
                                    <p>Redux</p>
                                </div>
                                <div className="card">
                                    <img  src={ts} alt="" />
                                    <p>TypeScript</p>
                                </div>
                                <div className="card">
                                    <img  src={tailwind} alt="" />
                                    <p>Tailwind</p>
                                </div>
                                <div className="card">
                                    <img  src={html} alt="" />
                                    <p>Html</p>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About