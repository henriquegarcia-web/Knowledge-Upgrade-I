import React, { useState, useEffect } from 'react'
import HFMouse from './HFMouse'

const HFCleanup = () => {

  const [visivel, setVisivel] = useState(true)

  return (
    <>
      <button onClick={() => setVisivel(!visivel)}>Toogle Visivel</button>

      {visivel && 
        <HFMouse />
      }
    </>
  )
}

export default HFCleanup