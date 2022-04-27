import AddTask from "./AddTask";
import Tasks from "./Tasks";

const Body = () => {
  return (
    <div className="todo-list__body mt-5">
      <AddTask />
      <Tasks />
    </div>
  );
};

export default Body;
