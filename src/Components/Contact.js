import React from 'react'
import girl from '../images/mail.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLinkedinIn,faGithub} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const Contact = () => {
  return (
    <div id="contact" className='divide project contact'> 
         <div className='divide-sub1'>
            <h1 className='contact-head'>Contact me</h1>
            <p className='info2'>DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL.</p>
            <p className='details'>(+91) 9390835435</p>
            <p className='details'>sindhukanakarao149@gmail.com</p>
            
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
         </div>
         <div className='divide-sub2'>
          <img className="img" src={girl}></img>
         </div>
    </div>
   
  )
}

export default Contact