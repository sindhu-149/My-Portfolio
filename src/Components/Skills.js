import React from 'react'
import girl from '../images/women.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHtml5,faCss3,faJs,faReact,faBootstrap,faGit,faGithub} from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  return (
    <div  id ="skill" className="divide project skills">
    <div className='divide-sub1'>
      <img className="img" src={girl}></img>
    </div>
    <div className='divide-sub2 skill-sub'>
      <h1 className='head1'>What I do</h1>
      <p className='info1'>CRAZY FRONT END DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
      <div className='icon-container'>
      <div >
      <FontAwesomeIcon className='skill-icons' icon={faHtml5} />
      <p className="icon-names">html-5</p>
      </div>
      <div >
      <FontAwesomeIcon className='skill-icons' icon={faCss3} />
      <p className="icon-names">css</p>
      </div>
      <div >
      <FontAwesomeIcon className='skill-icons' icon={faJs} />
      <p className="icon-names">JavaScript</p>
      </div>
      <div >
      <FontAwesomeIcon className='skill-icons' icon={faReact} />
      <p className="icon-names">React</p>
      </div>
      <div >
      <FontAwesomeIcon className='skill-icons' icon={faBootstrap} />
      <p className="icon-names">Bootstrap</p>
      </div>
      <div >
      <FontAwesomeIcon className='skill-icons' icon={faGit} />
      <p className="icon-names">Git</p>
      </div>
      <div >
      <FontAwesomeIcon className='skill-icons' icon={faGithub} />
      <p className="icon-names">Github</p>
      </div>

      {/* <FontAwesomeIcon className='skill-icons' icon={faCss3} />
      <FontAwesomeIcon className='skill-icons' icon={faJs} />
      <FontAwesomeIcon className='skill-icons' icon={faReact} />
      <FontAwesomeIcon className='skill-icons' icon={faBootstrap} />
      <FontAwesomeIcon className='skill-icons' icon={faGit} />
      <FontAwesomeIcon className='skill-icons' icon={faGithub} /> */}
      </div>
      <p>⚡ Develop highly interactive Front end / User Interfaces for  web  applications</p>
    </div>

    </div>
  )
}

export default Skills