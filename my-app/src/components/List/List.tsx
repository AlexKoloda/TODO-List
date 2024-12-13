import ListItem from "../ListItem/ListItem";
import styles from "./List.module.scss";
import { useAppSelector } from "../../hook";
import { selectFilteredTodos, selectIds, selectNormalizeTodos } from "../../store/selectors";

const List: React.FC = () => {
  const normalizeTodos = useAppSelector(selectNormalizeTodos);
  const ids = useAppSelector(selectIds);
  
  return (
    <section>
      <ul className={styles.list}>
        { ids.map((id) => {
          return <ListItem key={id} todo={normalizeTodos[id]} />;
        }) 
        }
          
      </ul>
    </section>
  );
};

export default List;


/* todos.map((todo) => {
          return <ListItem key={todo.id} todo={todo} />;
        }) */