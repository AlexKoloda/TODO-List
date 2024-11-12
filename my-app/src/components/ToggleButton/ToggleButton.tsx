import styles from "./ToggleButton.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";
import { toggleCompleteAll } from "../../store/todoSlice";
import { selectFilteredTodos } from "../../store/selectors";
import { useAppDispatch } from "../../hook";

const ToggleButton: React.FC = () => {
  const todos = useSelector(selectFilteredTodos);
  const dispacth = useAppDispatch();

  const handleClick = () => {
    dispacth(toggleCompleteAll());
  };

  return (
    <button
      type="button"
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
