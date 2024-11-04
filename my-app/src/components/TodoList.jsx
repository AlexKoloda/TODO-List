import {useSelector} from 'react-redux';
import TodoItem from "./TodoItem";

const TodoList = () => {
  const todos = useSelector(state => state.todos.todos);
 
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
