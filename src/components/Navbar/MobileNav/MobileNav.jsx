import React from 'react'
import './MobileNav.css'
import { Link } from 'react-scroll';

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
    <div className={`mobile-menu ${isOpen? "active": ""}`}
    onClick={toggleMenu}
    >
    <div className='mobile-menu-container'>
    <img className='logo' src = "./assets/images/logo.svg" alt = ""/>
    <ul>
        <li>
                <Link to="hero" duration = {500} smooth = {true} className='menu-item'>Home</Link>
               </li>
       
               <li>
               <Link to="skills" duration = {500} smooth = {true} className='menu-item'>Skills</Link>
               </li>
       
               <li>
               <Link to="work-experience" duration = {500} smooth = {true} className='menu-item'>Work Experience</Link>
               </li>
       
               <li>
               <Link to="contact" duration = {500} smooth = {true} className='menu-item'>Contact Me</Link>
               </li>

        <a href = "https://drive.google.com/file/d/1OlVoMWgTRtWwbUjWLJgqnlGqRmZMTE2J/view?usp=sharing"
        className='contact-btn' onClick={() => {}}>
            Resume
        </a>
    </ul>
    </div>
    </div>
    </>
  )
}

export default MobileNav;