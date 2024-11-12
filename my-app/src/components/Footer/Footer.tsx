import Count from "../Count/Count";
import styles from "./Footer.module.scss";
import { useAppDispatch, useAppSelector } from "../../hook";
import { deleteAll, toggleFilter } from "../../store/todoSlice";
import { selectFilteredTodos } from "../../store/selectors";

const buttons = [
  { text: "Все", id: "all" },
  { text: "Активные", id: "active" },
  { text: "Завершенные", id: "completed" },
];

const Footer = () => {
  const dispacth = useAppDispatch();
  const todos = useAppSelector(selectFilteredTodos);
  const amountCompleted = todos.filter(
    (todo) => !todo.isCompleted
  );
  const length = amountCompleted.length;

  const handleClickDeleteAll = () => {
    dispacth(deleteAll());
  };

  return (
    <nav className={styles.footer__nav}>
      <Count length={length} />
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
            onClick={handleClickDeleteAll}
          >
            ✕
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
