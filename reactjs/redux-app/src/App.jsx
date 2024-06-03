import { useSelector, useDispatch } from "react-redux";
import { inc, desc } from "./reducers/counter";
function App() {
  const dispatcher = useDispatch();
  const couter = useSelector(store => store.couter);
  return (
    <div className="text-center">
      <div className="flex gap-4 justify-center">
        <h1 className="text-5xl">{couter.value}</h1>
        <h1 className="text-5xl">₹ {couter.price}</h1>
      </div>
      <hr className="my-2" />
      <button className="border p-2" onClick={() => dispatcher(inc())}>Inc</button>
      <button className="border p-2" onClick={() => dispatcher(desc())}>Desc</button>
    </div>
  );
}

export default App;
