import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onHandleDelete, onChangeTask, onEditTask, }) => {
  return (
    <section className="main">
      <ul className="main__list">
        {tasks.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              /* onEditTask = {onEditTask} */
              onHandleDelete={onHandleDelete}
              key={todo.id}
              onChangeTask={onChangeTask}
            
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
