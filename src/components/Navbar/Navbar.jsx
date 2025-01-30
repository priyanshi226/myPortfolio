import React,{useState} from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-scroll';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

  return (
    <>
    <MobileNav isOpen = {openMenu} toggleMenu = {toggleMenu} />

    <nav className='nav-wrapper'>
    <div className='nav-content'>
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

    <button className="menu-btn" onClick={toggleMenu}>
    {openMenu ? <CloseIcon/> : <MenuIcon />}
</button>

    </div>
    </nav>
    </>
  )
}

export default Navbar