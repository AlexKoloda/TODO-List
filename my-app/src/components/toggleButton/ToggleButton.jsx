import styles from "./ToggleButton.module.scss";
import cn from "classnames";

const ToggleButton = ({ onToggleCompleteAll, todosLength }) => {
  return (
    <button
      className={cn({
        [styles.main__active]: !todosLength,
        [styles.main__active__visible]: todosLength,
      })}
      onClick={(event) => {
        event.stopPropagation();
        onToggleCompleteAll();
      }}
    >
      отметить все
    </button>
  );
};

export default ToggleButton;
