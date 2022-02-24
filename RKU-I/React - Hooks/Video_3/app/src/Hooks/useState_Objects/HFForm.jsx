import React, { useState } from 'react'

const HFForm = () => {

  const [nome, setNome] = useState({name: '', lastname: ''})

  const setProp = (key, e) => {
    setNome({...nome, [key]: e.target.value})
  }

  return (
    <div>
      <input 
        type="text" 
        name='name' 
        placeholder='Nome' 
        onChange={(e) => setProp('name', e)}
      />
      <input 
        type="text" 
        name='lastname' 
        placeholder='Sobrenome'
        onChange={(e) => setProp('lastname', e)}
      />

      <div>
        O nome é: {nome.name} e o sobrenome é {nome.lastname}
      </div>
    </div>
  )
}

export default HFForm