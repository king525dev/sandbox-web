import React from 'react'

const ErrorPage = ({ error }) => {
     return (
          <Link
               to={`/`}
          >
               <div className="err">
                    <h1 className="err">Erorr...</h1>
                    <h2 className="err">Something went wrong :(</h2>
                    <pre>
                         {error.message}
                    </pre>
               </div>

               <small className='err'>* Click Anywhere to go back Home *</small>
          </Link>
     )
}

export default ErrorPage
