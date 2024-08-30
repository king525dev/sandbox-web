import React from 'react';
import { Link } from 'react-router-dom';

const dataLinkStyle = {
     color: "#eee"
}

const Footer = () => {
     return (
          <footer>
               <div className="logo">
                    <div className="grid">
                         <a href={`https://www.instagram.com/nvmor_e/`}></a>
                         <a href={`https://github.com/king525dev'`}></a>
                         <a href={`https://king525dev.github.io/vcard-personal-portfolio/`}></a>
                         <a href={`https://github.com/king525dev`}></a>
                    </div>
                    <a href={`https://king525dev.github.io/vcard-personal-portfolio/`}>
                         <div className="para">
                              <p>ORE</p>
                              <p>AJIBADE</p>
                         </div>
                    </a>
               </div>
               <Link
                    to={`/data`}
               >
                    <small style={dataLinkStyle}>
                         &copy;Copyright king525dev
                    </small>
               </Link>
          </footer>
     )
}

export default Footer
