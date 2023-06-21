import React from 'react'
import projects from '../projects.json'
import repo from '../images/repo.png'

const Projects = () => {
  const arr=[1,2,3,4]
  return (
    <div id="project" className='project pro'>
        <h1 className='head'>Projects</h1>

        <div className='project-grid'>
            {projects.map(a=>
              <a className="link" href={a.link}>
            <div className='grid-items'>
            
              <img className="repo" src={repo}></img>
              <span className='name'> {a.name}</span>
              <p>{a.description}</p>
              <div>
              <div className="dot-color" style={{ backgroundColor: a.color }}></div>
              <span className="language">{a.language}</span>
              </div>
             
            </div>
            </a>)}

        </div>
        <div className='git-btn'> 
        <a className='link' href='https://github.com/sindhu-149'>
        <button className='btn '>MORE PROJECTS</button>
        </a>
        </div>
        
    </div>
  )
}

export default Projects