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
      name: "cook pasta",
      checked: false,
    },
    {
      id: 2,
      name: "call mother",
      checked: true,
    },
    {
      id: 3,
      name: "go to work",
      checked: true,
    },
    {
      id: 4,
      name: "remember to buy tickets to concert ",
      checked: false,
    },
    {
      id: 5,
      name: "smoke ewek everyday",
      checked: true,
    },
    {
      id: 6,
      name: "do research on astronomy",
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

  const addTask = (task) => {
    let id = Math.floor(Math.random() * 10000000 + 1);
    setTasks([
      ...tasks,
      {
        id: id,
        ...task,
      },
    ]);
    console.log("add the task: ", task);
  };

  const editTask = (id) => {
    setTasks(
      tasks.map((task) => {
        if (task.id === id) {
          task.editing = !task.editing;
        }
        return task;
      })
    );
    console.log("We will edit task with the id: ", id);
  };

  return (
    <div className="App">
      <div className="container border rounded p-5 mt-5">
        <Header />

        <Body tasks={tasks} handleDelete={deleteTask} handleFinished={markAsFinished} handleAddTask={addTask} handleEdit={editTask} />

        <Footer />
      </div>
    </div>
  );
}

export default App;
