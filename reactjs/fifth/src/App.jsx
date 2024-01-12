import { useState } from "react";
import Person from "./Person";

function App() {
  const [player, setPlayer] = useState("");
  const data = ["Jenny", "John", "Anjali", "Nikita", "Ramesh", "Nitesh"];

  const playerNameHandler = (name) => {
    if (player == name) {
      setPlayer("");
    } else {
      setPlayer(name);
    }
  }

  const display = data.map(
    (name, index) => <Person name={name} playerName={player} handler={playerNameHandler} key={index} />
  )

  return (
    <div className="container">
      <h1 className="text-center my-4">Player is {player}</h1>
      <div className="row">
        {display}
      </div>
    </div>
  );
}

export default App;
