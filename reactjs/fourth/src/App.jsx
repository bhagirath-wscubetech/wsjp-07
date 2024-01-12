import Accord from "./Accord";
import data from "./data";
function App() {
  const accordElems = data.map(
    (d, i) => {
      return <Accord key={i} title={d.title} body={d.body} />
    }
  )
  return (
    <div className="container">
      {accordElems}
    </div>
  );
}

export default App;
