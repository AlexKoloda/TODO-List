import styles from "./ToggleButton.module.scss";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import { toggleCompleteAll } from "../../store/todoSlice";
import { selectFilteredTodos } from "../../store/selectors";

const ToggleButton = () => {
  const todos = useSelector(selectFilteredTodos);
  const dispacth = useDispatch();

  const handleClick = (event: { stopPropagation: () => void; }) => {
    event.stopPropagation();
    dispacth(toggleCompleteAll());
  }

  return (
    <button
      className={cn({
        [styles.toggle_button__active]: !todos.length,
        [styles.toggle_button__active__visible]: todos.length,
      })}
      onClick={handleClick}
    >
      ✓
    </button>
  );
};

export default ToggleButton;