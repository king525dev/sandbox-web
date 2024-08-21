import React from 'react'

const ProjectStats = ({ project }) => {
     console.log(project)
     return (
          <section className='stats'>
               <h2>STATS</h2>
               <div>
                    <span className="stat">
                         <p className="head">FullName: </p>
                         <p className="res">{project.fullName}</p>
                    </span>
                    <span className="stat">
                         <p className="head">Technologies: </p>
                         <p className="res">{project.technology}</p>
                    </span>
                    <span className="stat">
                         <p className="head">Author: </p>
                         <p className="res">{project.author}</p>
                    </span>
                    <span className="stat">
                         <p className="head">Class: </p>
                         <p className="res">{project.class}</p>
                    </span>
                    <span className="stat">
                         <p className="head">Active: </p>
                         <p className="res">{`${project.active}`}</p>
                    </span>
               </div>
          </section>
     )
}

export default ProjectStats
