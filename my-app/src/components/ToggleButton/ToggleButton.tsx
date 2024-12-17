import styles from "./ToggleButton.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";
import { todosListSelector } from "../../store/selectors";
import { useAppDispatch } from "../../hook";
import { completeAll } from '../../store/todo/todoThunks';

const ToggleButton: React.FC = () => {
  const todos = useSelector(todosListSelector);
  const dispacth = useAppDispatch();

  const handleClick = () => {
    dispacth(completeAll());
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
