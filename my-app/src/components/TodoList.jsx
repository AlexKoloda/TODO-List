import TodoItem from "./TodoItem";

const TodoList = ({ filtredTodos, onHandleDelete, onChangeTodos }) => {
  return (
    <section className="main">
      <ul className="main__list">
        {filtredTodos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              onHandleDelete={onHandleDelete}
              key={todo.id}
              onChangeTodos={onChangeTodos}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
