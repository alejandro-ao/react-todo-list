import Task from "./Task";

const Tasks = ({ tasks, handleDelete }) => {
  return (
    <div className="todo-list__tasks">
      {tasks.map((task) => {
        return (
          <Task
            key={task._id}
            taskData={task}
            handleDelete={() => handleDelete(task._id)}
          />
        );
      })}
    </div>
  );
};

export default Tasks;
