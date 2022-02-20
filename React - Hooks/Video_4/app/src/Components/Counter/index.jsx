import React from 'react'

import { useCount } from '../../Context/Count'

const Counter = () => {

  const { count, setCount } = useCount()

  return (
    <>
      <br/>

      <button onClick={() => {setCount(count + 1)}}>Increase</button>

      <br/>
      <br/>
    </>
  )
}

export default Counter