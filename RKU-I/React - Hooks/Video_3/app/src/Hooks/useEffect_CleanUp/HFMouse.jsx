import React, { useState, useEffect } from 'react'

const HFMouse = () => {

  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  const getMousePosition = (e) => {
    console.log('cordenadas')

    setX(e.screenX)
    setY(e.screenY)
  }

  useEffect(() => {

    window.addEventListener('mousemove', getMousePosition)

    return () => {
      window.removeEventListener('mousemove', getMousePosition)
    }

  }, [])

  return (
    <>
      <div>
        Posição X: {x}
      </div>
      
      <br/>

      <div>
        Posição Y: {y}
      </div>
    </>
  )
}

export default HFMouse