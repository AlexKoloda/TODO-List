import TodoCount from "./TodoCount";

const Footer = ({ tasks, setTasks }) => {
  const handleCLickDeleteAll = () => {
    setTasks(tasks.filter((elem) => elem === tasks));
  };

  const getSortTaskActive = () => {
    setTasks(tasks.filter((elem) => elem.isCompleted === false));
  };

  const getSortTaskCompleted = () => {
    setTasks(tasks.filter((elem) => elem.isCompleted === true));
  };

  const getAllTasks = () => {
    setTasks(tasks);
  };

  return (
    <nav className="footer__nav">
      <TodoCount tasks={tasks} />
      <ul className="footer__list">
        <li>
          <button className="footer__button" onClick={getAllTasks}>
            Все
          </button>
        </li>
        <li>
          <button className="footer__button" onClick={getSortTaskActive}>
            Активные
          </button>
        </li>
        <li>
          <button className="footer__button" onClick={getSortTaskCompleted}>
            Завершенные
          </button>
        </li>
        <li>
          <button className="main__submit" onClick={handleCLickDeleteAll}>
            x
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
