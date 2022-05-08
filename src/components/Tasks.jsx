import Task from "./Task";

const Tasks = ({ tasks, handleDelete, handleFinished, handleEdit }) => {
  return (
    <div className="todo-list__tasks">
      {tasks.map((task) => {
        return <Task key={task.id} taskData={task} handleDelete={() => handleDelete(task.id)} handleFinished={() => handleFinished(task.id)} handleEdit={() => handleEdit(task.id)} />;
      })}
    </div>
  );
};

export default Tasks;
