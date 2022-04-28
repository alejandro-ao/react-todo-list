import AddTask from "./AddTask";
import Tasks from "./Tasks";

const Body = ({ tasks, handleDelete, handleFinished }) => {
  return (
    <div className="todo-list__body mt-5">
      <AddTask />
      <Tasks
        tasks={tasks}
        handleDelete={handleDelete}
        handleFinished={handleFinished}
      />
    </div>
  );
};

export default Body;
