const TodoList = ({ tasks, setTasks }) => {
  const handleClickDelete = (key) => {
    setTasks(tasks.filter((e) => e !== tasks[key]));
  };
  return (
    <section className="main">
      <ul className="main__list">
        {tasks.map((item, index) => (
          <li className="main__item" key={index}>
            <div className="main__checkbox"></div>
            {item}
            <button
              className="main__delete"
              type="submit"
              onClick={() => handleClickDelete(index)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TodoList;
