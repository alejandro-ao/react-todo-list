import { useState } from "react";

const AddTask = ({ handleAddTask, setShowAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  /**
   * Handle submit event in Add Task form. Call the add task handler
   * which will update the DB and the client.
   * Reset the form to its initial state and hide the form. 
   * 
   * @param {Event} e 
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    !title
      ? window.alert("Please add a title to your task!!")
      : handleAddTask({
          name: title,
          description: description,
          checked: false,
        });
    setTitle("");
    setDescription("");
    setShowAddTask(false);
  };

  return (
    <div className="todo-list__add">
      <form action="post" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="taskTitle" className="form-label">
            Your new task:
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="taskTitle"
          />

          <label htmlFor="taskDescription" className="form-label">
            Task description:
          </label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="form-control"
            id="taskDescription"
          />
        </div>
        <button type="submit" className="btn btn--violet">
          Add new task
        </button>
      </form>
    </div>
  );
};

export default AddTask;
