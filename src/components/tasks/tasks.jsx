import "./tasksStyles.css";

import TaskCard from "../taskCard/taskCard";

import { useState } from "react";
import uuid from "react-uuid";

function Tasks() {
  const TASK_LIST = [];

  const [tasks, setTasks] = useState(TASK_LIST);
  const [plNumber, setPlNumber] = useState("");
  const [digitError, setDigitError] = useState(false);

  //must set a reusable button that has a disabled state for this

  const plNumberHandler = (e) => {
    e.preventDefault();

    if (e.target.value.length < 3) {
      console.log("lengt is below 3");
      setDigitError(true);
    }

    if (e.target.value.length === 3) {
      setDigitError(false);
    }
    setPlNumber(e.target.value);

    //must create a function that checks if the number is 3 digits
  };

  //Create Scene

  const createScene = (e) => {
    e.preventDefault();

    const taskObject = {
      id: uuid(),
      plNumber: plNumber,
    };

    setTasks([...tasks, taskObject]);
    setPlNumber("0");

    console.log(tasks);
  };

  //Delete scene

  const deleteScene = (sceneId) => {
    const removeScene = [...tasks].filter((task) => task.id !== sceneId);
    setTasks(removeScene);
  };

  return (
    <div>
      <form onSubmit={createScene}>
        <label>PL Number</label>
        <input
          type="text"
          name="plNumber"
          id="plNumber"
          maxLength="3"
          size="3"
          required
          value={plNumber}
          onChange={plNumberHandler}
        />
        <button type="submit">Create scene</button>
      </form>
      <div className="taskContainer">
        {tasks.map((task) => {
          return (
            <TaskCard
              key={task.id}
              sceneId={task.id}
              plNumber={task.plNumber}
              deleteScene={deleteScene}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Tasks;
