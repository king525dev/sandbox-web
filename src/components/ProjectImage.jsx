import React from 'react'

const ProjectImage = ({ project }) => {

     const headerStyle = {
          backgroundImage: `url(${project.image})`
     }

     return (
          <header className='prj' style={headerStyle}>
               <div className="project-image-buttons">
                    <span className="p-1"></span>
                    <span className="p-2"></span>
                    <span className="p-3"></span>
               </div>
          </header>
     )
}

export default ProjectImage
