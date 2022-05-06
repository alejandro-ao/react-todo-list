import { useState } from "react";
import EditTask from "./EditTask";
import TaskInfo from "./TaskInfo";

const Task = ({ taskData, handleDelete, handleFinished }) => {
  const [task, setTask] = useState({
    id: taskData.id,
    name: taskData.name,
    description: taskData.description,
    finished: taskData.finished,
    editing: taskData.editing,
  });

  const handleEdit = () => {
    setTask({ ...task, editing: !task.editing });
  };

  const updateTask = (newName, newDescription) => {
    console.log(newName, newDescription);
  }

  return (
    <div className="task d-flex justify-content-between align-items-center border rounded p-3 mb-1">
      {task.editing ? <EditTask name={task.name} description={task.description} updateTask={updateTask}/> : <TaskInfo name={task.name} description={task.description} />}
      <div>
        <div>
          <button className="btn btn-outline-secondary w-100 mb-1" onClick={handleEdit}>
            Edit
          </button>
        </div>
        <div>
          <button className="btn btn-outline-secondary w-100 mb-1" onClick={handleDelete}>
            Delete
          </button>
        </div>
        <div>
          <button className="btn btn-secondary w-100 mb-1" onClick={handleFinished}>
            Mark as finished
          </button>
        </div>
        <div>
          <button className="btn w-100 " onClick={() => console.log(task)}>
            test
          </button>
        </div>
      </div>
    </div>
  );
};

export default Task;
