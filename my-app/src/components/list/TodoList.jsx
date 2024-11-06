import TodoItem from "../item/TodoItem";
import styles from "./TodoList.module.scss";

const TodoList = ({
  filteredTodos,
  onHandleDelete,
  onToggleComplete,
  onEditTodos,
}) => {
  return (
    <section>
      <ul className={styles.main__list}>
        {filteredTodos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              onHandleDelete={onHandleDelete}
              key={todo.id}
              onToggleComplete={onToggleComplete}
              onEditTodos={onEditTodos}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;