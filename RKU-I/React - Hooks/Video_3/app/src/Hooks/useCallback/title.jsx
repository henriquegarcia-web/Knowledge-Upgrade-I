import React from 'react'

const Title = () => {
  
  console.log('Renderizando Title')

  return (
    <>
      <h1>Aumento de salário por idade</h1>
    </>
  )
}

export default React.memo(Title)