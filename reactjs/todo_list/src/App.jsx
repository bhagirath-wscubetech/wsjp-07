import { useState } from "react";
import Display from "./Display";

function App() {
  const [leftData, setLeftData] = useState(['Task1','Task2','Task3','Task4']);
  const [rightData, setRightData] = useState([]);

  const moveToRight = (index) => {
    // move from left data to right data

    // step1: Add a copy of that data to right box first
    setRightData(
      [
        ...rightData,
        leftData[index] // leftData[1]
      ]
    )
    // step2: Delete data from leftData
    const newLeftData = leftData.filter(
      (lD, i) => {
        if (i == index) return false;
        else return true;
      }
    )
    setLeftData(newLeftData); // state change -> comp re-render
  }

  const moveToLeft = (index) => {
    setLeftData(
      [
        ...leftData,
        rightData[index]
      ]
    )
    const newRightData = rightData.filter(
      (rD, i) => {
        if (i == index) return false;
        else return true;
      }
    )
    setRightData(newRightData);

  }
  return (
    <div className="container">
      <div className="d-flex my-3" style={{ gap: 10 }}>
        <input type="text" className="form-control" />
        <button className="btn btn-primary">Add</button>
      </div>
      <div className="row">
        <Display items={leftData} mode="bg-primary" moveHandler={moveToRight} title="Left" />
        <Display items={rightData} mode="bg-secondary" moveHandler={moveToLeft} title="Right" />
      </div>
    </div>
  );
}

export default App;
