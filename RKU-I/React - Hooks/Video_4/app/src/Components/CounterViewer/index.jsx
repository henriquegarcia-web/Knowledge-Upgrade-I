import React from 'react'

import { useCount } from '../../Context/Count'

const CounterViewer = () => {

  const { count } = useCount()

  return (
    <>
      <span>
        <b>Count: {count}</b>
      </span>
    </>
  )
}

export default CounterViewer