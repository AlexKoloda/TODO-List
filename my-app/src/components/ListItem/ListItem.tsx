import { useState } from "react";
import { toggleComplete, deleteTodo, Todo, editTodo } from "../../store/todoSlice";
import Form from "../Form/Form";
import styles from "./ListItem.module.scss";
import cn from "classnames";
import { useAppDispatch } from "../../hook";

interface ListItemProps {
  todo: Todo;
}

const ListItem: React.FC<ListItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleClick = () => {
    dispatch(toggleComplete(todo.id));
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleClickDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleSubmitChanges = (text: string) => {
    dispatch(editTodo({ id: todo.id, text }));
    setIsEditing(false)
  };

  return (
    <li className={styles.list__item}>
      <div
        className={cn({
          [styles.list__checkbox]: !todo.isCompleted,
          [styles.list__checkbox__check]: todo.isCompleted,
        })}
        onClick={handleClick}
      ></div>
      <div
        className={cn({
          [styles.list__text]: !todo.isCompleted,
          [styles.list__text__completed]: todo.isCompleted,
        })}
        onDoubleClick={handleDoubleClick}
      >
        {isEditing ? (
          <Form
          onSubmit={handleSubmitChanges} 
          initialValue={todo.text} 
          inputClassName={styles.list__input} 
          buttonClassName={styles.list__button} 
        />
        ) : (
          todo.text
        )}
      </div>
      <button
        className={styles.list__delete}
        type="button"
        onClick={handleClickDelete}
      >
        ✕
      </button>
    </li>
  );
};

export default ListItem;
