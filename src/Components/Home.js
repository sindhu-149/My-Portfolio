import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
 
import girl from '../images/main.png'


const Home = () => {
  return (
    <div id ="home" className='divide project'> 

      <div className='divide-sub1'>
          <div>
            <h1 className='hello'>Hi all, I'm Sindhuja<img className='gif' src="https://em-content.zobj.net/source/microsoft-teams/363/waving-hand_1f44b.png"></img></h1>
            <p className='info'>
                I'm Front-end Developer 🚀 having an experience of building Web applications with  Reactjs / JavaScript / HTML / CSS and some other cool libraries and frameworks.
            </p>
          </div>

          <div className='icon-container' >
            <a className='link' href='https://www.linkedin.com/in/sindhu-chintalapudi/'>
              <FontAwesomeIcon className='linkedin icons' icon={faLinkedinIn}/>
            </a>
            <a className='link' href='https://github.com/sindhu-149'>
            <FontAwesomeIcon className='git icons' icon={faGithub}/>
            </a>
            <a className='link' href='mailto:sindhukanakarao@gmail.com'>
            <FontAwesomeIcon className='mail icons' icon={faEnvelope } />
            </a>
          </div>

          <div>
          <a className='link' href='#contact'>
            <button className='btn'>CONTACT ME</button>
          </a>
           <a className="link" href="https://drive.google.com/file/d/1gOrwFXpGyxUX4tWG9jXOuP34vESOI-lZ/view?usp=sharing"> <button className='btn'>SEE MY RESUME </button> </a>
            

          </div>
      </div>

      <div className='divide-sub2'>
          <img className="img" src={girl}></img>
      </div>
      

    </div> 


  )
}

export default Home