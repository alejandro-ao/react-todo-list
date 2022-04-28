const AddTask = () => {
  return (
    <form action="post">
      <div className="mb-3">
        <label htmlFor="newTask" className="form-label">
          Your new task:
        </label>
        <input type="text" className="form-control" id="newTask" aria-describedby="emailHelp" />
      </div>
      <button type="submit" className="btn btn-primary">
        Add new task
      </button>
    </form>
  );
};

export default AddTask;
