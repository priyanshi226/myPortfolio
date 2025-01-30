import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import { Link } from 'react-scroll';
import Hero from './components/Hero/Hero.jsx'
import Skills from './components/Skills/Skills.jsx'
import WorkExperience from './components/WorkExperience/WorkExperience.jsx'
import ContactMe from './components/ContactMe/ContactMe.jsx'
import Footer from './components/Footer/Footer.jsx'

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='container'>
    <section id="hero">
          <Hero />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="work-experience">
          <WorkExperience />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
    </div>
    <Footer/>
    </>
  )
}

export default App