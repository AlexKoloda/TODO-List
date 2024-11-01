import TodoCount from "./TodoCount";
const buttons = [
  { text: "Все", id: "all" },
  { text: "Активные", id: "active" },
  { text: "Завершенные", id: "completed" },
];

const Footer = ({filtredTodos, onDeleteAll, onChangeFilter }) => {
  return (
    <nav className="footer__nav">
      <TodoCount length={filtredTodos.length} />
      <ul className="footer__list">
        {buttons.map((button) => {
          return (
            <li key={button.id}>
              <button
                className="footer__button"
                onClick={() => onChangeFilter(button.id)}
              >
                {button.text}
              </button>
            </li>
          );
        })}
        <li>
          <button className="main__submit" onClick={() => onDeleteAll()}>
            x
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
