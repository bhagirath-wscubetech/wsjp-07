import React from "react";
import Person from "./Person";
import Header from "./Header";
import Nav from "./Nav";
function App() {
  return (
    <div className="parent">
      <Person name="Bhagirath" age="40" gender="M" />
      <Person name="Rohit" age="10" gender="M" />
      <Person name="Sita" age="30" gender="F" />
      <Person name="Geeta" age="10" gender="F" />
    </div>
  )
}

export default App;

// XML -> Extended 
