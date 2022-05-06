const TaskInfo = ({ name, description }) => {
  return (
    <div>
      <p>{name}</p>
      <small className="form-text text-muted">{description}</small>
    </div>
  );
};

export default TaskInfo;
