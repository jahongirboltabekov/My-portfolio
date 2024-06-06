import React from 'react'
import About from '../components/about/About'
import Contact from '../components/contact/Contact'
import HomePage from '../components/home/HomePage'
import Projects from '../components/myProjects/Projects'

function Home() {
  return (
    <div>
        <HomePage/>
        <About/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home