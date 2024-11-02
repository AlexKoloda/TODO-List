import { useState } from "react";

const TodoItem = ({ todo, onHandleDelete, onChangeTodos, onEditTodos }) => {
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
            onEditTodos({
              ...todo,
              text: e.target.value,
            });
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
        onClick={() => {
          onChangeTodos(todo.id);
        }}
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
        onClick={() => onHandleDelete(todo.id)}
      >
        x
      </button>
    </li>
  );
};

export default TodoItem;
