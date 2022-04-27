const AddTask = () => {
  return (
    <form action="post">
      <div class="mb-3">
        <label for="newTask" class="form-label">
          Your new task:
        </label>
        <input type="text" class="form-control" id="newTask" aria-describedby="emailHelp" />
      </div>
      <button type="submit" class="btn btn-primary">
        Add
      </button>
    </form>
  );
};

export default AddTask;
