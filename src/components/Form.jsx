import React from 'react'
import { useState } from 'react'
import database from '../modules/data'
import uniqueId from '../modules/uniqueId'

const Form = () => {

     const [values, setValues] = useState({
          id: uniqueId(),
          name: "project",
          fullName: "A Random Project",
          image: "https://picsum.photos/1440/1100",
          description: "",
          github: "https://github.com/",
          link: "",
          download: "",
          docs: "",
          technology: "",
          author: "king525dev",
          class: "",
          active: false
     })

     const set = (name) => {
          return ({ target: { value } }) => {
               setValues(oldValues => ({ ...oldValues, [name]: value }));
          }
     };

     const upload = async (e) => {
          e.preventDefault();
          database.uploadData(values)
     }


     return (
          <>
               <form className='edit' id='input' onSubmit={upload} >
                    <input type="text" name="name" id="name" placeholder='Name' value={values.name} onChange={set('name')} />
                    <input type="text" name="full-name" id="fullName" placeholder='Full Name' defaultValue={values.fullName} onChange={set('fullName')} />
                    <input type="text" name="image" id="image-lnk" placeholder='Image Link' value={values.image} onChange={set('image')} />
                    <textarea type="text" name="description" id="description" placeholder='Description' value={values.description} onChange={set('description')}></textarea>
                    <input type="text" name="github" id="github" placeholder='Github Link' value={values.github} onChange={set('github')} />
                    <input type="text" name="link" id="link" placeholder='Link' value={values.link} onChange={set('link')} />
                    <input type="text" name="download" id="download" placeholder='Download Link' value={values.download} onChange={set('download')} />
                    <input type="text" name="technology" id="technology" placeholder='List Technologies' value={values.technology} onChange={set('technology')} />
                    <input type="text" name="author" id="author" placeholder='Author' value={values.author} onChange={set('author')} />
                    <input type="text" name="class" id="class" placeholder='Class' value={values.class} onChange={set('class')} />
                    <input type="text" name="active" id="active" placeholder='Active' value={values.active} onChange={set('active')} />
                    <input type="submit"/>
               </form>

               <a className="form-db" href="https://console.firebase.google.com/u/0/project/sandbox-b2af1/overview" target="_blank" rel="noopener noreferrer">
                    Go to Database
               </a>
          </>
     )
}

export default Form
