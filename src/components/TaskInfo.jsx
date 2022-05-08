const TaskInfo = ({ name, description, finished, handleChecked }) => {
  return (
    <div className="todo-list__task__info">
      {finished ? (
        <input type="checkbox" name="" id="" onClick={(e) => handleChecked(e)} checked />
      ) : (
        <input type="checkbox" name="" id="" onClick={(e) => handleChecked(e)} />
      )}
      <div className="center-vertical">
        <p className={finished ? "crossed" : ""}>{name}</p>
        <small>{description}</small>
      </div>
    </div>
  );
};

export default TaskInfo;
