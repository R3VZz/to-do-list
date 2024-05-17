import { useState } from 'react';

const Form = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      addTask(taskInput);
      setTaskInput("");
    }
  }

  return (
    <form className='form' onSubmit={handleSubmit}>
      <input 
        type="text" 
        value={taskInput}
        placeholder="Enter a task here"
        onChange={(e) => setTaskInput(e.target.value)} 
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default Form;
