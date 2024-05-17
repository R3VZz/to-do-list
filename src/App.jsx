import { useState } from 'react';
import Form from './components/Form';
import ToDoTracker from './components/ToDoTracker';
import ToDoList from './components/ToDoList';
import Help from './components/Help'

import './App.css'

const App = () => {
  const [todos, setTodos] = useState([]);

  const tasksCompleted = todos.filter(todo => todo.completed).length;
  const totalTasks = todos.length;

  const addTask = (task) => {
    setTodos([...todos, { task, completed: false }]);
  }

  const toggleTaskCompletion = (index) => {
    const newTodos = todos.map((todo, i) => (
      i === index ? { ...todo, completed: !todo.completed } : todo
    ));
    setTodos(newTodos);
  }

  const deleteTask = (index) => {
    let storedTasks = [...todos];
    storedTasks.splice(index, 1);
    setTodos(storedTasks);
  }

  const editTask = (index, newTask) => {
    const newTodos = todos.map((todo, i) => (
      i === index ? {...todo, task: newTask } : todo
    ));
    setTodos(newTodos);
  }

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <Help />
      <ToDoTracker tasksCompleted={tasksCompleted} totalTasks={totalTasks} />
      <Form addTask={addTask} />
      <ToDoList 
        todos={todos} 
        toggleTaskCompletion={toggleTaskCompletion} 
        deleteTask={deleteTask}
        editTask={editTask}  
      />
    </div>
  );
}

export default App;
