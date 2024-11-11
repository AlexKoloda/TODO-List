import ListItem from "../ListItem/ListItem";
import styles from "./List.module.scss";
import { useAppSelector } from "../../hook";
/* import { selectFilteredTodos } from "../../store/selectors"; */

const List: React.FC = () => {
  const todos = useAppSelector(state => state.todos.todos)

  return (
    <section>
      <ul className={styles.main__list}>
        {todos.map((todo) => {
          return <ListItem todo={todo} />;
        })}
      </ul>
    </section>
  );
};

export default List;