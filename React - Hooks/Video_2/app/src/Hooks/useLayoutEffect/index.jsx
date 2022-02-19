import { useLayoutEffect, useEffect, useRef } from "react";

function LayoutEffectHook() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  return (
    <div className="App">
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} />
    </div>
  );
}

export default LayoutEffectHook;

// Esse exemplo mostra que o 'useLayoutEffect' é executado antes do useEffect
// O console.log do 'useLayoutEffect' retorna 'PEDRO' antes que o useEffect mude-o para HELLO