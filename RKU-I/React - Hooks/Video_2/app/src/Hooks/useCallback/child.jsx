import React, { useEffect } from "react";

function Child({ returnComment }) {
  useEffect(() => {
    console.log("FUNCTION WAS CALLED");
  }, [returnComment]);

  return <div>{returnComment("Pedro")}</div>; 
  // Se não houvesse o 'useCalback', returnComment() faria a chamada um segundo console.log (l:5)
}

export default Child;