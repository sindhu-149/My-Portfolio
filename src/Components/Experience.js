import React from 'react'
import experience from '../experience.json'
const Experience = () => {
  return (
    <div id="experience" className='project experience'>
    <h1 className='head'>Experiences</h1>
    <div className='experience-grid'>
      {experience.map(a => 
      <div  className='exp-items'>
        <div className='part1'>{a.company}</div>
        <div className='part2'>
        <h3>{a.role}</h3>
        <p>{a.description}</p>
        </div>
      </div>)}
    </div>
    </div>
  )
}

export default Experience