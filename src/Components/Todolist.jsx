
// function Todolist(){
//     return(
//         <>
//         <div className="Todo">
//         <input 
//             type="text" 
//             className="Data" 
//             placeholder="WHAT DO YOU HAVE PLANNED"/>

//             <button type="submit" className="Add">ADD </button>
//             </div>
//         </>
//     )
// };
// export default Todolist;
import React from "react";
import ToDoItem from "./ToDoItem";

function ToDoList({ tasks, toggleComplete, deleteTask, editTask }) {
  return (
   
    <ul className="todo-list">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleComplete={toggleComplete}
          deleteTask={deleteTask}
          editTask={editTask}
        />
      ))}
    </ul>
  )
};

export default ToDoList;
