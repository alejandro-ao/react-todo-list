const Task = ({ taskName, finished }) => {
  let crossed = finished ? "crossed" : "";

  const handleFinished = (e) => {
    e.target.parentNode.parentNode.firstChild.classList.toggle("crossed");
  };

  return (
    <div className="task d-flex justify-content-between align-items-center border rounded p-3 mb-1">
      <div className={crossed}>{taskName}</div>
      <div>
        <button className="btn btn-outline-secondary me-1">Remove</button>
        <button className="btn btn-secondary" onClick={handleFinished}>
          Mark as finished
        </button>
      </div>
    </div>
  );
};

export default Task;