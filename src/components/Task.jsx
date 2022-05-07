import { useState } from "react";
import EditTask from "./EditTask";
import TaskInfo from "./TaskInfo";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

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

  const handleChecked = (e) => {
    e.target.checked
      ? setTask({ ...task, finished: true })
      : setTask({ ...task, finished: false });
  };

  const finishTask = () => {
    setTask({ ...task, finished: !task.finished });
  };

  return (
    <div className={task.editing ? "todo-list__task editing" : "todo-list__task"}>
      {task.editing ? (
        <EditTask
          name={task.name}
          description={task.description}
          updateTask={updateTask}
        />
      ) : (
        <TaskInfo
          name={task.name}
          description={task.description}
          finished={task.finished}
          handleChecked={handleChecked}
        />
      )}
      <div className="todo-list__task__actions">
        <button onClick={editTask}>
          <FaEdit />
        </button>
        <button onClick={handleDelete}>
          <FaTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default Task;
