import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      name: "call friend",
      checked: false,
    },
    {
      id: 2,
      name: "call mother",
      checked: true,
    },
    {
      id: 3,
      name: "call brother",
      checked: true,
    },
    {
      id: 4,
      name: "call friend",
      checked: false,
    },
    {
      id: 5,
      name: "call mother",
      checked: true,
    },
    {
      id: 6,
      name: "call brother",
      checked: true,
    },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const markAsFinished = (id) => {
    setTasks(
      // return array of all tasks w the task of id -> !task.checked
      tasks.map((task) => {
        if (task.id === id) {
          task.checked = !task.checked;
        }
        return task;
      })
    );
    // console.log(`task ${id} finished`);
  };

  return (
    <div className="App">
      <div className="container border rounded p-5 mt-5">
        <Header />

        <Body tasks={tasks} handleDelete={deleteTask} handleFinished={markAsFinished} />

        <Footer />
      </div>
    </div>
  );
}

export default App;
