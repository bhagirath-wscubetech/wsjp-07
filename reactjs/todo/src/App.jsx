import { useState } from "react";
import Display from "./Display";
import Input from "./Input";

function App() {
  const [tasks, setTask] = useState(["Task6", "Task5", "Task4", "Task3", "Task2", "Task1"]);

  const addHandler = (data) => {
    if (data != "") {
      setTask(
        [
          data,
          ...tasks
        ]
      )
    }

  }

  const removeTask = (index) => {
    const newTasks = tasks.filter(
      (t, i) => {
        if (i == index) return false;
        else return true;
      }
    )
    setTask(newTasks); // state change -> re-render
  }

  return (
    <div className="container">
      <Input handler={addHandler} />
      <Display tasks={tasks} removeHandler={removeTask} />
    </div>
  );
}

export default App;
