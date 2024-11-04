import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeTodos, deleteTodo, editTodos } from "../store/TodoSlice";

const TodoItem = ({ todo }) => {
  
  const dispacth = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  
  let todosText;

  if (isEditing) {
    todosText = (
      <>
        <input
          className={
            !todo.isCompleted ? "main__input" : "main__input--completed"
          }
          value={todo.text}
          onChange={(e) => {
           dispacth( editTodos({
              ...todo,
              text: e.target.value,
            }));
          }}
        />
      </>
    );
  } else {
    todosText = <>{todo.text}</>;
  }

  return (
    <li className="main__item">
      <div
        className={
          !todo.isCompleted ? "main__checkbox" : "main__checkbox--check"
        }
        onClick={() => dispacth(changeTodos(todo.id))}
      ></div>
      <span
        className={!todo.isCompleted ? "main__text" : "main__text--completed"}
        onDoubleClick={() => {
          setIsEditing(true);
        }}
      >
        {todosText}
      </span>
      <button
        className="main__delete"
        type="submit"
        onClick={() => dispacth(deleteTodo(todo.id))}
      >
        x
      </button>
    </li>
  );
};

export default TodoItem;
