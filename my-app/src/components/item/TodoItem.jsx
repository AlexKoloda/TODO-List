import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo, editTodos} from "../../store/TodoSlice";
import TextInput from "./TextInput";
import styles from "./TodoItem.module.scss";
import cn from "classnames";

const TodoItem = ({ todo }) => {
  const dispacth = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmitChanges = (text) => {
    editTodos({
      ...todo,
      text,
    });
  };

  return (
    <li className={styles.main__item}>
      <div
        className={cn({
          [styles.main__checkbox]: !todo.isCompleted,
          [styles.main__checkbox__check]: todo.isCompleted,
        })}
        onClick={() => dispacth(toggleComplete(todo.id))}
      ></div>
      <div
        className={cn({
          [styles.main__text]: !todo.isCompleted,
          [styles.main__text__completed]: todo.isCompleted,
        })}
        onDoubleClick={() => {
          setIsEditing(true);
        }}
      >
        {isEditing ? (
          <TextInput
            initialValue={todo.text}
            onSubmit={handleSubmitChanges}
            inputClassName={cn({
              [styles.main__input]: !todo.isCompleted,
              [styles.main__input__completed]: todo.isCompleted,
            })}
          />
        ) : (
          todo.text
        )}
      </div>
      <button
        className={styles.main__delete}
        type="submit"
        onClick={() => dispacth(deleteTodo(todo.id))}
      >
        x
      </button>
    </li>
  );
};

export default TodoItem;
