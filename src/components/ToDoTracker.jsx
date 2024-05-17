const ToDoTracker = ( {tasksCompleted, totalTasks} ) => {
    return (
        <section className="todotracker">
            <div>
                <p>Tasks Completed</p>
                {tasksCompleted}/{totalTasks}
            </div>
        </section>
    )
}
export default ToDoTracker;
