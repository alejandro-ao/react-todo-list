const TaskInfo = ({ name, description, finished }) => {
  return (
    <div className="task__info">
      <p className={finished ? "crossed" : ""}>{name}</p>
      <small className="form-text text-muted">{description}</small>
    </div>
  );
};

export default TaskInfo;
