import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
     return (
          <nav className='prj'>
               <Link
                    to={`/`}
               >
                    <p>SANDBOX</p>
               </Link>
               <Link
                    to={`/`}
               >
                    <span className='bckBtn'>
                         <i className="fa-solid fa-arrow-left bckArrow"></i>
                         <p>Back</p>
                    </span>
               </Link>
          </nav>
     )
}

export default NavBar
