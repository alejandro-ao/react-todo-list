import Tasks from "./Tasks";

const Body = ({ tasks, handleDelete }) => {
  return (
    <div className="todo-list__body">
      <Tasks tasks={tasks} handleDelete={handleDelete} />
    </div>
  );
};

export default Body;
