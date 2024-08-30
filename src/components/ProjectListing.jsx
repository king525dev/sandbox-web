import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FaGithub } from 'react-icons/fa'
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import randomColour from '../modules/randomColour'

const colourList = randomColour();

const linkStyles1 = {
     backgroundColor: colourList[0]
}

const linkStyles2 = {
     backgroundColor: colourList[1]
}

const linkStyles3 = {
     backgroundColor: colourList[2]
}

const ProjectListing = ({obj}) => {

     const project = obj;

     const imageStyle = {
          backgroundImage: `url(${project.image})`
     }

     const renderLink = () => {

          const iniLinks = [
               {
                    name: "link",
                    link: project.link
               },
               {
                    name: "download",
                    link: project.download
               },
               {
                    name: "docs",
                    link: project.docs
               }
          ]

          const links = iniLinks.filter((link) => link.link != "")
          const no = Math.floor(Math.random() * links.length)

          const outLink = links[no]

          if(outLink.name == "link"){
               return (
                    <span className='link-icon' style={linkStyles1}><FontAwesomeIcon icon={faArrowUpRightFromSquare} /></span>
               )
          }else if(outLink.name == "download"){
               return (
                    <span className='link-icon' style={linkStyles2}><i className="fa-solid fa-download"></i></span>
               )
          }else if(outLink.name == "docs"){
               return (
                    <span className='link-icon' style={linkStyles3}><i className="fa-solid fa-file"></i></span>
               )
          }else{
               return
          }
     }
     

     return (
          <Link
               to={`/project/${project.id}`}
          >
               <div className="project">
                    <div className="project-image" style={imageStyle}></div>
                    <div className="project-buttons">
                         <span className='git-icon'><FaGithub /></span>     
                         {renderLink()}
                    </div>
                    <div className="project-title">{project.name.replaceAll("-", " ").toUpperCase()}</div>
               </div>
          </Link>
     )
}

export default ProjectListing
