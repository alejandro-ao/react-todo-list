import Tasks from "./Tasks";

const Body = ({ tasks, handleDelete, handleFinished, handleEdit }) => {
  return (
    <div className="todo-list__body">
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
