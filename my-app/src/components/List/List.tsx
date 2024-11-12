import ListItem from "../ListItem/ListItem";
import styles from "./List.module.scss";
import { useAppSelector } from "../../hook";
import { selectFilteredTodos } from "../../store/selectors";

const List: React.FC = () => {
  const todos = useAppSelector(selectFilteredTodos);
  return (
    <section>
      <ul className={styles.list}>
        {todos.map((todo) => {
          return <ListItem key={todo.id} todo={todo} />;
        })}
      </ul>
    </section>
  );
};

export default List;
