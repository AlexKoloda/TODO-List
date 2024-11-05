import TodoCount from "./TodoCount";
import styles from "../footer/Footer.module.scss";

const buttons = [
  { text: "Все", id: "all" },
  { text: "Активные", id: "active" },
  { text: "Завершенные", id: "completed" },
];

const Footer = ({ todos, onDeleteAll, onToggleFilter }) => {
  const amountCompleted = todos.filter((todo) => !todo.isCompleted);
  const length = amountCompleted.length;

  return (
    <nav className={styles.footer__nav}>
      <TodoCount length={length} />
      <ul className={styles.footer__list}>
        {buttons.map((button) => {
          return (
            <li key={button.id}>
              <button
                className={styles.footer__button}
                onClick={() => onToggleFilter(button.id)}
              >
                {button.text}
              </button>
            </li>
          );
        })}
        <li>
          <button
            className={styles.footer__delete}
            onClick={() => onDeleteAll()}
          >
            x
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
