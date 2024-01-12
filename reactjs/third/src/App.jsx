import { useState } from "react";
// function -> hook
function App(props) {
  const [count, setCount] = useState(0);
  // stateName, state modified = useState(initialValue)
  const inc = () => {
    setCount(count + 1);
    // count+=1;
  }
  function desc() {
    setCount(count - 1);
    // count-=1;
  }
  return (
    <div className="App">
      <h1>
        {count}
      </h1>
      <h1>
        ₹ {count * props.price}
      </h1>
      <div>
        <button onClick={desc}>-</button>
        <button onClick={inc}>+</button>
      </div>
    </div>
  );
}

export default App;
