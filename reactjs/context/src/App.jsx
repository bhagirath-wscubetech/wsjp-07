import { useEffect, useState } from "react";
import Left from "./Left";
import Right from "./Right";

function App() {
  const [amount, setAmount] = useState(0);
  const [count, setCount] = useState(0);

  function inc() {
    setCount(count + 1);
  }

  function desc() {
    setCount(count - 1);
  }

  useEffect(
    () => {
      setAmount(500 * count);
    },
    [count]
  )

  return (
    <div className="max-w-[1100px] mx-auto grid grid-cols-2">
      <Left incHandler={inc} count={count}/>
      <Right amount={amount} descHandler={desc} />
    </div>
  );
}

export default App;
