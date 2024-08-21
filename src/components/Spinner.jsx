import React from 'react'
import { ScaleLoader } from 'react-spinners';

const override = {
     display: "block",
     margin: "45vh 45vw"
}

const Spinner = () => {
     return (
          <ScaleLoader
               color="#282828"
               cssOverride={override}
               size={150}
          />
     )
}

export default Spinner
