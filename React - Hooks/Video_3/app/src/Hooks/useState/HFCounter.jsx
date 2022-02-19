import React, { useState } from 'react'

const HFCounter = () => {
  
  const [counter, setCounter] = useState(0)
  
  return (
    <div>
      <button onClick={() => setCounter(counter + 1)}>Incrementar: {counter}</button>
    </div>
  )
}

export default HFCounter