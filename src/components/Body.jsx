import AddTask from "./AddTask";
import Tasks from "./Tasks";

const Body = ({ tasks, handleDelete, handleFinished, handleAddTask, handleEdit }) => {
  return (
    <div className="todo-list__body mt-5">
      <Tasks
        tasks={tasks}
        handleDelete={handleDelete}
        handleFinished={handleFinished}
        handleEdit={handleEdit}
      />
    </div>
  );
};

export default Body;
