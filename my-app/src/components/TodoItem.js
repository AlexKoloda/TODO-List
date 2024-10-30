const TodoItem = ({ tasks, setTasks }) => {
  const handleClickDelete = (task) => {
    setTasks(tasks.filter((elem) => elem.id !== task.id));
  };
  const handleClickComplete = (task) => {
    if (task.isCompleted) {
      return;
    }
    task.isCompleted = true;
  };

  return tasks.map((task) => (
    <li className="main__item" key={task.id}>
      <div
        className="main__checkbox"
        onClick={() => handleClickComplete(task)}
      ></div>
      <span
        className={!task.isCompleted ? "main__text" : "main__text--completed"}
      >
        {task.text}
      </span>
      <button
        className="main__delete"
        type="submit"
        onClick={() => handleClickDelete(task)}
      >
        x
      </button>
    </li>
  ));
};

export default TodoItem;
