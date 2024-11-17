import React from 'react'
import ProjectCard from '../project-card'
import projects from '@/projects.json'

const Projects = () => {
  return (
    <div className='mt-'>
      {projects.map((project) => (
        <ProjectCard project={project} key={project.id}/>
      ))}
    </div>
  )
}

export default Projects