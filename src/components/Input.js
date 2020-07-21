import React, { useState, useEffect } from "react";

function Input() {
  const [stock, setStock] = useState("");

  useEffect(() => {
    document.title = `Вы выбрали  ${stock}`;
  });


  return (
    <>
      <button onClick={() => setStock('AAPL')}></button>
      <p>{stock}</p>
    </>
  );
}

export default Input;