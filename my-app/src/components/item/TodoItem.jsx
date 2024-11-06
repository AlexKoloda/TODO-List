import { useState } from "react";
import TextInput from "./TextInput";
import styles from "./TodoItem.module.scss";
import cn from "classnames";

const TodoItem = ({ todo, onHandleDelete, onToggleComplete, onEditTodos }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmitChanges = (text) => {
    onEditTodos({
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
        onClick={() => onToggleComplete(todo.id)}
      ></div>
      <div
        className={cn({
          [styles.main__text]: !todo.isCompleted,
          [styles.main__text__completed]: todo.isCompleted,
        })}
        onDoubleClick={() => setIsEditing(true)}
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
        onClick={() => onHandleDelete(todo.id)}
      >
        x
      </button>
    </li>
  );
};

export default TodoItem;
