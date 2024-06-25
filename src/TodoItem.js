// src/components/TodoItem.js
import React, { useState } from "react";

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);

  const handleUpdate = () => {
    updateTodo(todo.id, { ...todo, text: newText });
    setIsEditing(false);
  };

  return (
    <div className="todo-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <div style={{display:"flex" , gap:'10px'}}>
            <div>
              <button  className="btn edit-btn" onClick={() => setIsEditing(true)}>Edit</button>
            </div>

            <div>
              <button className= 'btn delete-btn' onClick={() => deleteTodo(todo.id)}>Delete</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TodoItem;
