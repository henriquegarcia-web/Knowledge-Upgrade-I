import React, { useState } from 'react'

const StateHook = () => {

  const [counter, setCounter] = useState(0)
  const [inputText, setInputText] = useState('')

  const increment = () => {
    setCounter(counter + 1)
  }

  const decrement = () => {
    if (counter === 0) return
    setCounter(counter - 1)
  }

  const changeText = (event) => {
    setInputText(event.target.value)
  }

  return (
    <>
      <div>
        <button onClick={decrement}>Remover</button>

        {counter}

        <button onClick={increment}>Adicionar</button>
      </div>

      <div>
        <input type="text" onChange={changeText} />
        {inputText}
      </div>
    </>
  )
}

export default StateHook