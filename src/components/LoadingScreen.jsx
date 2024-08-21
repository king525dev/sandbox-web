import React from 'react'

const LoadingScreen = () => {
     return (
          <header className='ld'>
               <section className="header-buttons upper-buttons">
                    <span className="gbtn l-1"></span>
                    <span className="gbtn l-2"></span>
                    <span className="gbtn l-3"></span>
               </section>
               <section className="title">
                    <div className="loader-bar" id="loader-bar">
                         <div className="block-border"></div>
                         <div className="block-border"></div>
                         <div className="block-border"></div>
                         <div className="block-border"></div>
                         <div className="block-border"></div>
                         <div className="block-border"></div>
                         <div className="block-border"></div>
                         <div className="block-border"></div>
                         <div className="block-meter unloaded"></div>
                         <div className="block-meter unloaded"></div>
                         <div className="block-meter unloaded"></div>
                         <div className="block-meter unloaded"></div>
                         <div className="block-meter unloaded"></div>
                         <div className="block-meter unloaded"></div>
                         <div className="block-meter unloaded"></div>
                         <div className="block-meter unloaded"></div>
                         <div className="block-meter unloaded"></div>
                         <div className="block-meter unloaded"></div>
                    </div>
               </section>
               <section className="header-buttons lower-buttons-ld">
                    <span className="gbtn l-1"></span>
                    <span className="gbtn l-1"></span>
                    <span className="gbtn l-1"></span>
               </section>
          </header>
     )
}

export default LoadingScreen;
