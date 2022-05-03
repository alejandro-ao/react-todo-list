import Task from "./Task";

const Tasks = ({ tasks, handleDelete, handleFinished, handleEdit }) => {
  return (
    <div className="todo-list__tasks mt-3">
      {tasks.map((task) => {
        if (!task.checked) {
          return (
            <Task
              key={task.id}
              taskData={task}
              handleDelete={() => handleDelete(task.id)}
              handleFinished={() => handleFinished(task.id)}
              handleEdit={() => handleEdit(task.id)}
            />
          );
        }
      })}

      {tasks.map((task) => {
        if (task.checked) {
          return (
            <Task
              key={task.id}
              taskData={task}
              handleDelete={() => handleDelete(task.id)}
              handleFinished={() => handleFinished(task.id)}
              handleEdit={() => handleEdit(task.id)}
            />
          );
        }
      })}
    </div>
  );
};

export default Tasks;
