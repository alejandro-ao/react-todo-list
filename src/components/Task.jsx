import { useState } from "react";
import EditTask from "./EditTask";
import TaskInfo from "./TaskInfo";

const Task = ({ taskData, handleDelete }) => {
  const [task, setTask] = useState({
    id: taskData.id,
    name: taskData.name,
    description: taskData.description,
    finished: taskData.finished,
    editing: taskData.editing,
  });

  const editTask = () => {
    setTask({ ...task, editing: !task.editing });
  };

  const updateTask = (newName, newDescription) => {
    setTask({
      ...task,
      name: newName,
      description: newDescription,
      editing: false,
    });
  };

  const finishTask = () => {
    setTask({ ...task, finished: !task.finished });
  };

  return (
    <div className="task d-flex justify-content-between align-items-center border rounded p-3 mb-1">
      {task.editing ? <EditTask name={task.name} description={task.description} updateTask={updateTask} /> : <TaskInfo name={task.name} description={task.description} finished={task.finished} />}
      <div className="task__actions">
        <button className="btn btn-outline-secondary w-100 mb-1" onClick={editTask}>
          Edit
        </button>
        <button className="btn btn-outline-secondary w-100 mb-1" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn btn-secondary w-100 mb-1" onClick={finishTask}>
          Mark as finished
        </button>
        <button className="btn w-100 " onClick={() => console.log(task)}>
          test
        </button>
      </div>
    </div>
  );
};

export default Task;
