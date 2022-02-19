import React, { useState, useCallback } from "react";

import Button from "./button";
import Title from "./title";

const CallbackHook = () => {  

  console.log('Renderizando componente Pai')

  const [idade, setIdade] = useState(20)
  const [salario, setSalario] = useState(2500)

  const aumentarIdade = useCallback(() => {
    setIdade(idade + 1)
  }, [idade])

  const aumentarSalario = useCallback(() => {
    setSalario(salario + 100)
  }, [salario])

  return (
    <>
      <Title />
      
      <br/>
      <br/>

      <div>
        <Button handleClick={aumentarIdade}>Aumentar idade</Button>
        <h3>Idade: {idade}</h3>
      </div>

      <div>
        <Button handleClick={aumentarSalario}>Aumentar salário</Button>
        <h3>Salário: {salario}</h3>
      </div>
    </>
  );
}

export default CallbackHook;