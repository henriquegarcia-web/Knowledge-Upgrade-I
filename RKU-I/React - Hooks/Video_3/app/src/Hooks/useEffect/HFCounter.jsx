import React, { useState, useEffect } from 'react'

const HFCounter = () => {
  
  const [counter, setCounter] = useState(0)
  
  const incrementar = () => {
    setCounter(counter + 1)
  }
  
  useEffect(() => {
    document.title = `Você clicou ${counter} vezes` // Toda vez que o valor é alterado, o useEffect é ativado novamente
  }, [counter]) // O array de parâmetros serve para identificar QUANDO o useEffect deve ser executado

  return (
    <div>
      <button onClick={incrementar}>Incrementar: {counter}</button>
    </div>
  )
}

export default HFCounter