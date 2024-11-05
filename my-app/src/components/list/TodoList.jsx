import TodoItem from "../item/TodoItem";
import styles from "./TodoList.module.scss";

const TodoList = ({
  filtredTodos,
  onHandleDelete,
  onChangeTodos,
  onEditTodos,
}) => {
  return (
    <section>
      <ul className={styles.main__list}>
        {filtredTodos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              onHandleDelete={onHandleDelete}
              key={todo.id}
              onChangeTodos={onChangeTodos}
              onEditTodos={onEditTodos}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
