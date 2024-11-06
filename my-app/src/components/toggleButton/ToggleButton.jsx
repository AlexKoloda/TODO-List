import styles from "./ToggleButton.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { toggleCompleteAll } from "../../store/todoSlice";
import { selectFilteredTodos } from "../../store/selectors";

const ToggleButton = () => {
  const todos = useSelector(selectFilteredTodos);
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