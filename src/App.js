import { useState, useEffect } from "react";
import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([]);

  /**
   * Load tasks in the DB to the client on window load.
   */
  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasks(tasksFromServer);
    };
    getTasks();
  }, []);

  /**
   * Get all the tasks form the DB.
   *
   * @return {object} data
   */
  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5001/tasks");
    const data = await res.json();

    return data;
  };

  /**
   * Remove a task from the DB and updates the client.
   *
   * @param {String} id
   */
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5001/tasks/${id}`, { method: "DELETE" });
    setTasks(tasks.filter((task) => task._id !== id));
  };

  /**
   * Adds a task to the DB and updates the client.
   *
   * @param {Object} task
   */
  const addTask = async (task) => {
    const res = await fetch(`http://localhost:5001/tasks`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(task),
    });

    const newTask = await res.json();
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="App">
      <div className="todo-list">
        <Header handleAddTask={addTask} />

        <Body tasks={tasks} handleDelete={deleteTask} />

        <Footer />
      </div>
    </div>
  );
}

export default App;
