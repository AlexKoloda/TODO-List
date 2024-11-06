import styles from "./ToggleButton.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { toggleCompleteAll } from "../store/TodoSlice";
import { selectFiltredTodos } from "../store/selectors";

const ToggleButton = ({ onToggleCompleteAll, todosLength }) => {
  const todos = useSelector(selectFiltredTodos);
  const dispacth = useDispatch();

  return (
    <button
      className={cn({
        [styles.main__active]: !todos.length,
        [styles.main__active__visible]: todos.length,
      })}
      onClick={(event) => {
        event.stopPropagation();
        dispacth(toggleCompleteAll());
      }}
    >
      отметить все
    </button>
  );
};

export default ToggleButton;