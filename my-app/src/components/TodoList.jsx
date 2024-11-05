import {useSelector} from 'react-redux';
import TodoItem from "./TodoItem";
import { selectFiltredTodos } from '../store/selectors';

const TodoList = () => {
  const todos = useSelector(selectFiltredTodos);
 
  return (
    <section className="main">
      <ul className="main__list">
        {todos.map((todo) => {          
          return (
            <TodoItem
            todo={todo}
            key={todo.id}            
          />
          );
        })}
      </ul>
    </section>
  );
};

export default TodoList;
