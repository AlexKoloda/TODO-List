import TodoItem from "./TodoItem";

const TodoList = ({ tasks, onHandleDelete, onChangeTask  }) => {
  return (
    <section className="main">
    <ul className="main__list">
        {tasks.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              onHandleDelete={onHandleDelete}
              key={todo.id}
              onChangeTask  = {onChangeTask}
            />
          );
        })}
        </ul>
    </section>
  );
};

export default TodoList;
