import React from 'react'
import { useState, useEffect } from 'react'
import ProjectListing from './ProjectListing'
import database from "../modules/data";
import Spinner from './Spinner';

const ProjectBoard = () => {

     const [data, setData] = useState([])
     const [searchInput, setSearchInput] = useState("");

     const handleChange = (e) => {
          e.preventDefault();
          setSearchInput(e.target.value);
     };

     useEffect(() => {
          const fetchData = async () => {
               try {
                    const out = await database.readData()
                    setData(out)
               } catch (err) {
                    console.error('Error fetching data:', err);
               }
          }

          fetchData();
     }, [])

     if (!data) {
          return <Spinner />;
     }

     if (searchInput.length > 0) {
          const newData = data.filter((project) => {
               return project.name.match(searchInput);
          });

          return (
               <>
                    <nav className='mn'>
                         <p>
                              PROJECT GALLERY
                         </p>
                         <div className="search-bar">
                              <input
                                   type="search"
                                   placeholder="Search Projects..."
                                   onChange={handleChange}
                                   value={searchInput}
                              />
                              <button onClick={handleChange}>
                                   <i className="fa-solid fa-magnifying-glass"></i>
                              </button>
                         </div>
                    </nav>
                    <main className='mn'>
                         {
                              newData.map((project) => {
                                   return (
                                        <ProjectListing key={project.id} obj={project} />
                                   )
                              })
                         }
                    </main>
               </>
          )
     }

     return (
          <>
               <nav className='mn'>
                    <p>
                         PROJECT GALLERY
                    </p>
                    <div className="search-bar">
                         <input
                              type="search"
                              placeholder="Search Projects..."
                              onChange={handleChange}
                              value={searchInput}
                         />
                         <button onClick={handleChange}>
                              <i className="fa-solid fa-magnifying-glass"></i>
                         </button>
                    </div>
               </nav>
               <main className='mn'>
                    {
                         data.map((project) => {
                              return (
                                   <ProjectListing key={project.id} obj={project} />
                              )
                         })
                    }
               </main>
          </>
     )
}

export default ProjectBoard
