import React, { useContext } from 'react'
import { Context } from '../context/Context';
import Project from './Project';

import '../styles/ProjectsList.scss';

const ProjectsList = () => {

  const { projectsData } = useContext(Context);

  const project = projectsData.map( ( i, id ) => (
    <Project key={id} i={i} />
  ))

  return (
    <section className='projects-list'>

        <div className='projects-list-wrap'>

          <section id="section1"></section>

          { project }
            
        </div>

    </section>
  )
}

export default ProjectsList
