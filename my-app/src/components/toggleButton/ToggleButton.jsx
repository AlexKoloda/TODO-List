import styles from "./ToggleButton.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { toggleCompleteAll } from "../../store/todoSlice";
import { selectFiltredTodos } from "../../store/selectors";

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
      ✓
    </button>
  );
};

export default ToggleButton;