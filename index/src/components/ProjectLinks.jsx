import React from 'react'

const ProjectLinks = ({ project }) => {
     return (
          <main className='prj'>
               <ul>

                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                         <li className="github">
                              <i className="fa-brands fa-github"></i>
                              <p>Github</p>
                         </li>
                    </a>

                    {
                         (project.link != "") ? (
                              <a href={project.link} target="_blank" rel="noopener noreferrer">
                                   <li className="link">
                                        <i className="fa-solid fa-arrow-up-right-from-square"></i>
                                        <p>Go to Project</p>
                                   </li>
                              </a>
                         ) : (
                              ""
                         )
                    }

                    {
                         (project.download != "") ? (
                              <a href={project.download} target="_blank" rel="noopener noreferrer">
                                   <li className="download">
                                        <i className="fa-solid fa-download"></i>
                                        <p>Download Project</p>
                                   </li>
                              </a>
                         ) : (
                              ""
                         )
                    }

                    {
                         (project.docs != "") ? (
                              <a href={project.docs} target="_blank" rel="noopener noreferrer">
                                   <li className="docs">
                                        <i className="fa-solid fa-file"></i>
                                        <p>Go to Documentation</p>
                                   </li>
                              </a>
                         ) : (
                              ""
                         )
                    }

               </ul>
          </main>
     )
}

export default ProjectLinks
