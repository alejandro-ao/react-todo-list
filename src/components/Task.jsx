const Task = ({ taskName, finished, editing, description, handleDelete, handleFinished, handleEdit }) => {
  let crossed = finished ? "crossed" : "";

  return (
    <div className="task d-flex justify-content-between align-items-center border rounded p-3 mb-1">
      {editing ? <p>editing</p> : <p>not editing</p> }
      <div className={crossed}>
        <p>{taskName}</p>
        <small className="form-text text-muted">{description}</small>
      </div>
      <div>
        <button className="btn btn-outline-secondary me-1" onClick={handleEdit}>
          Edit
        </button>
        <button className="btn btn-outline-secondary me-1" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn btn-secondary" onClick={handleFinished}>
          Mark as finished
        </button>
      </div>
    </div>
  );
};

export default Task;
