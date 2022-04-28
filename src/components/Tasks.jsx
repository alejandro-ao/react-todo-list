import Task from "./Task";

const Tasks = ({ tasks, handleDelete, handleFinished }) => {
  return (
    <div className="todo-list__tasks mt-3">
      {tasks.map((task) => {
        if (!task.checked) {
          return <Task key={task.id} taskName={task.name} finished={task.checked} handleDelete={() => handleDelete(task.id)} handleFinished={() => handleFinished(task.id)} />;
        }
      })}

      {tasks.map((task) => {
        if (task.checked) {
          return <Task key={task.id} taskName={task.name} finished={task.checked} handleDelete={() => handleDelete(task.id)} handleFinished={() => handleFinished(task.id)} />;
        }
      })}
    </div>
  );
};

export default Tasks;
