// import "./App.css"; 
// import Header from "./Components/Header";
// import Todolist from "./Components/todolist";
// import Todoitem from "./Components/Todoitem";

// function React(){
//   return(
//     <>
        
//     </>
//   );
// }
// export default function App(){
//   return(
//     <>
//     <React />
//     <Header />
//     <Todolist />
//     <Todoitem />
//     </>
//   );
// }
import React, { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css"; 

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

 
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  
  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Edit a task
  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  return (
    <div className="container">
      <Header />
      <div className="task-input">
        <input
          type="text"
          placeholder="Enter task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ToDoList
        tasks={tasks}
        toggleComplete={toggleComplete}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;

