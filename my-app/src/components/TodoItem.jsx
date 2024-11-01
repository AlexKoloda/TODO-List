const TodoItem = ({ todo, onHandleDelete, onChangeTodos, onEditTodos }) => {
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
          onEditTodos(todo.id);
        }}
      >
        {todo.text}
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
