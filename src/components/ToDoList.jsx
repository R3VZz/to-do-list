import { motion } from "framer-motion";
import { useState } from "react";

const ToDoList = ({ todos, toggleTaskCompletion, deleteTask, editTask }) => {
  const [editingIndex, setEditingIndex] = useState(null);
  const [newTask, setNewTask] = useState("");

  const handleEdit = (index, currentTask) => {
    setEditingIndex(index);
    setNewTask(currentTask);
  }

  const handleSave = (index) => {
    editTask(index, newTask);
    setEditingIndex(null);
    setNewTask("");
  }

  const handleChange = (e) => {
    setNewTask(e.target.value)
  }

  return (
    <ul className="list">
      {todos.map((todo, index) => (
        <motion.li
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="list-item" key={index}
        >
          <div className="button-container">
            <button onClick={() => deleteTask(index)}>Delete</button>
            {editingIndex === index ? (
              <>
                <input 
                  className="edit-task-form" 
                  type="text" value={newTask} 
                  onChange={handleChange} 
                />
                <button onClick={() => handleSave(index)}>Save</button>
              </>
            ) : (
              <button onClick={() => handleEdit(index, todo.task)}>Edit</button>
            )}
          </div>
          <span onClick={() => toggleTaskCompletion(index)}>
            {todo.completed ? <strike>{todo.task}</strike> : todo.task}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

export default ToDoList;

