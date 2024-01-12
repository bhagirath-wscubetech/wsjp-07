import Left from "./Components/Left";
import Right from "./Components/Right";

function App() {
  return (
    <div className="App" style={{display:"flex", gap:"30px"}}>
      <Left/>
      <Right/>
    </div>
  );
}

export default App;
