import React, { useState, useMemo } from 'react'
import { useCallback } from 'react'

const HFMemo = () => {

  const [contador1, setContador1] = useState(0)
  const [contador2, setContador2] = useState(0)

  const addContador1 = () => {
    setContador1(contador1 + 1)
  }

  const addContador2 = () => {
    setContador2(contador2 + 1)
  }

  const parOuImpar = useCallback(() => {
    let i = 0

    while (i < 3000000000) i++
    return contador1 % 2 === 0
  }, [contador1]) // Nesse exemplo, a função é isolada, e só vai ser executada novamente caso seu objeto/valor em dependência seja alterado

  return (
    <>
      <button onClick={addContador1}>Contador 1: {contador1}</button>
      <span>{parOuImpar ? 'Par' : 'Impar'}</span>
      <br/>
      
      <button onClick={addContador2}>Contador 2: {contador2}</button>
    </>
  )
}

export default HFMemo