import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FooterDescription from "./components/FooterDescription";


const TodoApp = () => {


/*   const changeAllTodos = () => {
    const completedAllTodos = todos.map((todo) => {
      return { ...todo, isCompleted: !todo.isCompleted };
    });

    setTodos(completedAllTodos);
  };

  const handleEditTodos = (todo) => {
    const editedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return todo;
      } else {
        return t;
      }
    });
    setTodos(editedTodos);
  };
 */
 
  return (
    <div className="main__container">
      <Header />
      <TodoInput

      /*  onChangeAllTodos={changeAllTodos} */
      />
      <TodoList />
      <Footer />
      <FooterDescription />
    </div>
  );
};

export default TodoApp;
