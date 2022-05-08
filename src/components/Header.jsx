import AddTask from "./AddTask";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from "react";

const Header = ({ handleAddTask }) => {
  const [showAddTask, setShowAddTask] = useState(false);

  return (
    <div className="todo-list__header">
      <div className="todo-list__header__title">
        <h1>Hanabi Todo List</h1>
        <button className="btn add-task" onClick={() => setShowAddTask(!showAddTask)}>
          {showAddTask ? <FaMinus /> : <FaPlus />}
        </button>
      </div>

      {showAddTask ? (
        <AddTask handleAddTask={handleAddTask} setShowAddTask={setShowAddTask} />
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
