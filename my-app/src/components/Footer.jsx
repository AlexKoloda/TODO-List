import TodoCount from "./TodoCount";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { deleteAll} from "../store/TodoSlice";
import {changeFilter } from "../store/FilterSlice";

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
    <nav className="footer__nav">
      <TodoCount length={length} />
      <ul className="footer__list">
        {buttons.map((button) => {
          return (
            <li key={button.id}>
              <button
                className="footer__button"
                onClick={() => dispacth(changeFilter(button.id)) }
              >
                {button.text}
              </button>
            </li>
          );
        })}
        <li>
          <button
            className="main__submit"
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
