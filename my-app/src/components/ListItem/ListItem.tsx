import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleComplete, deleteTodo } from "../../store/todoSlice";
import TextInput from "../TextInput/TextInput";
import styles from "./ListItem.module.scss";
import cn from "classnames";



interface ListItemProps {
  todo: {
    id: number,
    text: string,
    isCompleted: boolean,
  },
  key: number,
}


const ListItem: React.FC<ListItemProps> = ({ todo }) => {
  const dispacth = useDispatch();
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmitChanges = (text: string) => {
    return {...todo,text};
  };

  const handleClick = () => {
    dispacth(toggleComplete(todo.id));
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleClickDelete = () => {
    dispacth(deleteTodo(todo.id));
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
          <TextInput
            initialValue={todo.text}
            onSubmit={handleSubmitChanges}
            inputClassName={cn({
              [styles.list__input]: !todo.isCompleted,
              [styles.list__input__completed]: todo.isCompleted,
            })}
          />
        ) : (
          todo.text
        )}
      </div>
      <button
        className={styles.list__delete}
        type="submit"
        onClick={handleClickDelete}
      >
        ✕
      </button>
    </li>
  );
};

export default ListItem;