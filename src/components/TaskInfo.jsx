const TaskInfo = ({ name, description, finished, handleChecked }) => {
  return (
    <div className="todo-list__task__info">
      {finished ? (
        <input type="checkbox" name="" id="" onClick={(e) => handleChecked(e)} checked />
      ) : (
        <input type="checkbox" name="" id="" onClick={(e) => handleChecked(e)} />
      )}
      <div>
        <p className={finished ? "crossed" : ""}>{name}</p>
        <small className="form-text text-muted">{description}</small>
      </div>
    </div>
  );
};

export default TaskInfo;
