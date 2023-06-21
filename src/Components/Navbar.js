import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home'
import Skills from './Skills'
import Experience from './Experience'
import Projects from './Projects'
import Contact from './Contact'

const Navbar = () => {
  return (
    <div className='nav'>
        <a  href="#home" className='nav-sub1'>&lt; Sindhuja / &gt;</a>
        <div className='nav-sub2'>
            <a  href="#skill" className='nav-items'>Skills</a>
            <a  href="#project" className='nav-items'>Projects</a>
            <a  href="#experience" className='nav-items'>Work Experience</a>
            <a  href="#contact" className='nav-items'>Contact me</a> 
            
            
        </div>
    </div>
  )
}

export default Navbar