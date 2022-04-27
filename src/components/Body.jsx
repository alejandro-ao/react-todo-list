const Body = () => {
  return (
    <div className="todo-list__body mt-5">
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

      <div className="todo-list__tasks mt-3">
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="task1" />
          <label class="form-check-label" for="task1">
            Do laundry
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="task2" />
          <label class="form-check-label" for="task2">
            Make dinner
          </label>
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="task3" />
          <label class="form-check-label" for="task3">
            Finish test
          </label>
        </div>
      </div>
    </div>
  );
};

export default Body;
