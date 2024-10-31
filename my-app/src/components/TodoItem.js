const TodoItem = ({ todo, onHandleDelete, onChangeTask, /* onEditTask */}) => {

/*   const changeSpan = (todo) => {
  const editTodo = {...todo};
  
  if ( editTodo.isSpan) {
   editTodo.isSpan = false;
  } else {
    editTodo.isSPan = true;    
  } 

    onEditTask(editTodo); 
 
  } 
 */
  return (
    <li 
    className="main__item"
    /* onDoubleClick={() => changeSpan(todo)} */
    >
      <div
        className={
          !todo.isCompleted ? "main__checkbox" : "main__checkbox--check"
        }
        onClick={() => onChangeTask(todo.id)}
      ></div>
      <span
        className={!todo.isCompleted ? "main__text" : "main__text--completed"}
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
