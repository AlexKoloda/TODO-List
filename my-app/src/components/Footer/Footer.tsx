import Count from "../Count/Count";
import styles from "./Footer.module.scss";
import { useAppDispatch, useAppSelector } from "../../hook";
import { Filters, toggleFilter } from "../../store/todo/todoSlice";
import { selectFilteredTodos } from "../../store/selectors";
import { removeAllTodo } from '../../store/todo/todoThunks';

const buttons = [
  { text: "Все", id: Filters.all },
  { text: "Активные", id: Filters.active },
  { text: "Завершенные", id: Filters.completed },
];

const Footer = () => {
  const dispacth = useAppDispatch();
  const todos = useAppSelector(selectFilteredTodos);
  const length = todos.filter((todo) => !todo.isCompleted).length;  

  const handleClickDeleteAll = () => {
    dispacth(removeAllTodo());
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
