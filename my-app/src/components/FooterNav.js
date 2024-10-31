import TodoCount from "./TodoCount";
const buttons = ["Все", "Активные", "Завершенные"];

const Footer = ({ tasks, onDeleteAll, onFilterTask}) => {

  return (
    <nav className="footer__nav">
      <TodoCount tasks={tasks} />
      <ul className="footer__list">
        {buttons.map((text, index) => {
          return (
            <li key={index}>
              <button className="footer__button">{text}</button>
            </li>
          );
        })}
        <li>
          <button className="main__submit" onClick={() => onDeleteAll(tasks.id)}>
            x
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
