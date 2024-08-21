import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import database from "../modules/data";
import ProjectImage from './ProjectImage'
import ProjectLinks from './ProjectLinks'
import ProjectInfo from './ProjectInfo'
import ProjectStats from './ProjectStats'
import Spinner from './Spinner';

const Project = () => {

  const [value, setValue] = useState(null)
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const out = await database.readDoc(id)
        setValue(out)
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    }

    fetchData();
  }, [])

    if(value) {
      return (
        <div className="wrapper">
          <ProjectImage project={value} />
          <ProjectInfo project={value} />
          <ProjectLinks project={value} />
          <ProjectStats project={value} /> 
        </div>
      )
    } else {
      return <Spinner />;
    }
}

export default Project
