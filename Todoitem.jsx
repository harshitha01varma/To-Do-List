
import React, { useState } from "react";

function ToDoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleSaveEdit = () => {
    editTask(task.id, editedText);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${task.completed ? "completed" : ""}`}>
      {isEditing ? (
        <input
          type="text"
          value={editedText}
          onChange={(e) => setEditedText(e.target.value)}
        />
      ) : (
        <span>{task.text}</span>
      )}

      <div className="actions">
        {isEditing ? (
          <button className="save-btn" onClick={handleSaveEdit}>Save</button>
        ) : (
          <>
            <button className="edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
            <button className="complete-btn" onClick={() => toggleComplete(task.id)}>
              {task.completed ? "Undo" : "Complete"}
            </button>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
          </>
        )}
      </div>
    </li>
  );
}

export default ToDoItem;
