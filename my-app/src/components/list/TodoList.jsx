import TodoItem from "../item/TodoItem";
import styles from "./TodoList.module.scss";
import { useSelector } from "react-redux";
import { selectFilteredTodos } from "../../store/selectors";

const TodoList = () => {
  const todos = useSelector(selectFilteredTodos);

  return (
    <section>
      <ul className={styles.main__list}>
        {todos.map((todo) => {
          return <TodoItem todo={todo} key={todo.id} />;
        })}
      </ul>
    </section>
  );
};

export default TodoList;
