import { useState } from "react";
import EditTask from "./EditTask";
import TaskInfo from "./TaskInfo";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const Task = ({ taskData, handleDelete }) => {
  const [task, setTask] = useState({
    _id: taskData._id,
    name: taskData.name,
    description: taskData.description,
    finished: taskData.finished,
    editing: taskData.editing,
  });

  /**
   * Handle click on "edit" and updates task's editing state.
   * Does not affect the DB.
   */
  const handleEditTask = () => {
    setTask({ ...task, editing: !task.editing });
  };

  /**
   * Update the DB with a new name or description of a task
   * and updates the front end with this data.
   *
   * @param {String} newName
   * @param {String} newDescription
   */
  const handleUpdateTask = async (newName, newDescription) => {
    const res = await updateDbTask(newName, newDescription);
    setTask({
      ...task,
      name: newName,
      description: newDescription,
      editing: false,
    });
  };

  /**
   * Handle checkbox checked. Updates DB and updates the front
   * with the new data.
   *
   * @param {Event} e
   */
  const handleChecked = (e) => {
    e.target.checked
      ? updateDbFinished(true) && setTask({ ...task, finished: true })
      : updateDbFinished(false) && setTask({ ...task, finished: false });
  };

  /**
   * Update current task in DB with new name and/or description
   *
   * @param {String} newName
   * @param {String} newDescription
   * @returns
   */
  const updateDbTask = async (newName, newDescription) => {
    const res = await fetch(`http://localhost:5001/tasks/${task._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...task,
        name: newName,
        description: newDescription,
        editing: false,
      }),
    });
    return res;
  };

  /**
   * Update current task's finished state with either true or false
   *
   * @param {Boolean} finished
   * @returns {JSON} server response
   */
  const updateDbFinished = async (finished) => {
    const res = await fetch(`http://localhost:5001/tasks/${task._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        ...task,
        finished: finished,
      }),
    });
    return res;
  };

  return (
    <div className={task.editing ? "todo-list__task editing" : "todo-list__task"}>
      {task.editing ? (
        <EditTask
          name={task.name}
          description={task.description}
          updateTask={handleUpdateTask}
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
        <button onClick={handleEditTask}>
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
