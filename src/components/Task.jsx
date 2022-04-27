const Task = ({ taskName, checked }) => {
  return (
<div className="task d-flex justify-content-between align-items-center border rounded p-3 mb-1">
    {taskName}
    <button className="btn btn-secondary">Mark as finished</button>
</div>

  );
};

export default Task;
