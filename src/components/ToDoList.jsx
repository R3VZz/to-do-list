const ToDoList = ({ todos, toggleTaskCompletion, deleteTask}) => {
    return (
        <ul className="list">
        {todos.map((todo, index) => (
          <li className="list-item" key={index}>
            <span onClick={() => toggleTaskCompletion(index)}>
              {todo.completed ? <strike>{todo.task}</strike> : todo.task}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
    );
  }
  
  export default ToDoList;
  
