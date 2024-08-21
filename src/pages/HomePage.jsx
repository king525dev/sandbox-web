import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import LoadingScreen from '../components/LoadingScreen'
import HomeNavBar from '../components/HomeNavBar'
import ProjectBoard from '../components/ProjectBoard'
import Footer from '../components/Footer'


const btnStyle = {
     width: "100%",
     outline: "none",
     border: "none"
}

const HomePage = () => {
     const [loading, setLoading] = useState(true);
     const baseSpeed =  0.6;

     const finishLoading = () => {
          setLoading(false);
     }
     
     useEffect(() => {
               setTimeout(
                    finishLoading,
                    (baseSpeed*9000)
               );
     }, []);

     if(loading){
          return (
               <button onClick={finishLoading} style={btnStyle}>
                    <LoadingScreen />
               </button>
          )
     }else {
          return (
               <>
                    <Header />
                    <ProjectBoard />
                    <Footer />
               </>
          )
     }
}

export default HomePage
