import { useState } from "react";

const EditTask = ({ name, description, updateTask }) => {
  const [newTitle, setNewTitle] = useState(name);
  const [newDescription, setNewDescription] = useState(description);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("updating task with :", newTitle, newDescription);
    updateTask(newTitle, newDescription);
  };

  return (
    <div className="todo-list__task__edit">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="New description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        ></input>
        <button className="btn btn--violet"  type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditTask;
