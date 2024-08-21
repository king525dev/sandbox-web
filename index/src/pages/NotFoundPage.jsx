import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
     return (
          <Link
               to={`/`}
          >
               <div className="err">
                    <h1 className="err">404</h1>
                    <h2 className="err">Page Not Found :(</h2>
               </div>

               <small className='err'>* Click Anywhere to go back Home *</small>
          </Link>
          
     )
}

export default NotFoundPage
