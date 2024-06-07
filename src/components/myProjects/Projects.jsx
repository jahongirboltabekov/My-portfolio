import React from 'react'
import './Projects.scss'
import project from '../../assets/project.png'
import laptop from '../../assets/laptop.jpg'
import { NavLink } from 'react-router-dom'
function Projects() {
  return (
    <section id='project'>
      <div>
        <div className="container_2">
            <h3 className='projects_h3'>My Projects</h3>
            <p className='projects_p'>Here you will find some of the personal and clients projects that I created with each project containing its own case study</p>
            <div className="project_cards">
              <div className="pjc_card">
                <div className="project_imgs">
                  <img src={project} alt="" className="project_img" />
                  <img src={laptop} alt="" className="laptop_img" />
                </div>
                <div className="about_pjc">
                    <h2 className="project_h2">Online Shop</h2>
                    <p className="project_p2">I did this project in my exam during my course. In this project I made Scss, React, Redux-toolkit, login and admin panels. The information entered in the Contact section is sent to the Telegram bot</p>
                    <NavLink><h6>See More Website</h6></NavLink>
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Projects