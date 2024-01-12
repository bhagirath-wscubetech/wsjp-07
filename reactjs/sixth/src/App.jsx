import { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);

  const inc = () => {
    setCount(count + 1);
    // setPrice(count * 500);
  }
  const desc = () => {
    setCount(count - 1);
    // setPrice(count * 500);
  }

  useEffect(
    () => {
      console.log('Hiii')
    },
    [] // empty
  )

  useEffect(
    () => {
      console.log('Hello');
      setPrice(count * 500);
    },
    [count] // depedency list
  )

  return (
    <div className="container">
      <div>
        <h1>Qty: {count}</h1>
        <h1>Pirce: {price}</h1>
      </div>
      <div>
        <button onClick={inc}> Inc</button>
        <button onClick={desc}>Desc </button>
      </div>
    </div>
  );
}

export default App;
