import { useState } from "react";
import Task from "./Task";

const Tasks = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "call friend",
      checked: false,
    },
    {
      id: 2,
      name: "call mother",
      checked: true,
    },
    {
      id: 3,
      name: "call brother",
      checked: true,
    },
    {
      id: 4,
      name: "call friend",
      checked: false,
    },
    {
      id: 5,
      name: "call mother",
      checked: true,
    },
    {
      id: 6,
      name: "call brother",
      checked: true,
    },
  ]);

  return (
    <div className="todo-list__tasks mt-3">
      {tasks.map((task) => (
        <Task key={task.id} taskName={task.name} checked={task.checked} />
      ))}
    </div>
  );
};

export default Tasks;