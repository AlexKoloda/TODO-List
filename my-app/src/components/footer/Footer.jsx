import TodoCount from "./TodoCount";
import styles from "../footer/Footer.module.scss";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteAll } from "../store/TodoSlice";
import { toggleFilter } from "../store/FilterSlice";

const buttons = [
  { text: "Все", id: "all" },
  { text: "Активные", id: "active" },
  { text: "Завершенные", id: "completed" },
];

const Footer = () => {
  const dispacth = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
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
                onClick={() => dispacth(toggleFilter(button.id))}
              >
                {button.text}
              </button>
            </li>
          );
        })}
        <li>
          <button
            className={styles.footer__delete}
            onClick={() => dispacth(deleteAll())}
          >
            x
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
