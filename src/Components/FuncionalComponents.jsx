import React, { useState } from "react";

export default function FuncionalComponents() {
  const [valor, setValor] = useState(0);
  return (
    <div>
      <h1>Funcional Components</h1>
      <button onClick={() => setValor(valor + 1)}>+</button>
      <p>{valor}</p>
      <button onClick={() => setValor(valor - 1)}>-</button>
    </div>
  );
}
