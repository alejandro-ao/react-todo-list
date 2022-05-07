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
    <div className="task__edit">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="" value={newTitle} onChange={(e) => setNewTitle(e.target.value)} />
        <textarea type="text" placeholder="New description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)}></textarea>
        <button className="btn btn-primary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default EditTask;
