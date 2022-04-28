import { useState } from "react";

const AddTask = ({ handleAddTask }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    !title
      ? window.alert("Please add a title to your task!!")
      : handleAddTask({
          name: title,
          checked: false,
        });
    setTitle("");
  };

  return (
    <form action="post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="newTask" className="form-label">
          Your new task:
        </label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="newTask" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className="btn btn-primary">
        Add new task
      </button>
    </form>
  );
};

export default AddTask;
