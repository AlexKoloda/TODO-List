import TodoItem from "./TodoItem";

const TodoList = ({ tasks, setTasks }) => {
  return (
    <section className="main">
      <ul className="main__list">
        <TodoItem tasks={tasks} setTasks={setTasks} />
      </ul>
    </section>
  );
};

export default TodoList;
