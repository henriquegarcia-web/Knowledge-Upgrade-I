import React, { createContext, useState, useContext } from 'react'

const CountContext = createContext()

const CountProvider = ({ children }) => {

  const [count, setCount] = useState(0)

  return (
    <CountContext.Provider value={{
      count,
      setCount
    }}>
      {children}
    </CountContext.Provider>
  )
}

export default CountProvider

export function useCount() {
  const context = useContext(CountContext)

  const { count, setCount } = context
  return { count, setCount }
}