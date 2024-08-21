import React from 'react'

const ProjectInfo = ({ project }) => {
     return (
          <aside>
               <h1>{project.name.toUpperCase()}</h1>
               <p>
                    {project.description}
               </p>
          </aside>
     )
}

export default ProjectInfo
