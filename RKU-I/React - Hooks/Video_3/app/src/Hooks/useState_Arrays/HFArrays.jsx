import React, { useState } from 'react'

const HFArrays = () => {

  const [items, setItems] = useState([])

  const removeItem = (id) => {
    let updateItems = items.filter(item => item.id !== id) // Busca no array todos os itens, cujo id é diferente do id passado como parâmetro
    setItems(updateItems)
    // Desta forma, a função 'removeItems' reorganiza o array de forma a passar somente os items cujo...
  }

  const addItem = () => {
    
    let randomNumber = Math.random()

    let item = {
      id: randomNumber,
      value: randomNumber.toString()
    }

    setItems([...items, item]) // Pega uma cópia dos itens existentes, e adiciona o novo item
    // setItems([item, ...items]) // Faz ao contrário da função acima
  }

  const updateItem = (id) => {
    let updateRandomNumber = Math.random()

    let itemToUpdate = items.map(item => item.id === id ? {id: item.id, value: updateRandomNumber} : item)
    // Se o map encontrar um item condizente com o id passado, atualiza o valor, se não, mantém o valor existente

    setItems(itemToUpdate)
  }

  return (
    <div>
      <button onClick={addItem}>Adicionar</button>

      <br/>
      <br/>
      <br/>

      {items.map((item => (
        <div key={item.id}>
          <li>
            {item.value}
          </li>

          <button onClick={() => removeItem(item.id)}>Remover</button> {/* Passa como parâmetro o próprio id */}
          {/* Nesse caso é utilizado uma função anônima para evitar a renderização da função a cada item */}

          <button onClick={() => updateItem(item.id)}>Atualizar</button>

          <br/>
          <br/>
        </div>
      )))}
    </div>
  )
}

export default HFArrays