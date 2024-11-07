import "./App.css";
import Header from "./components/Header/Header";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import TodoInput from "./components/Input/TodoInput";
import TodoList from "./components/TodoList/TodoList";
import FooterDescription from "./components/Footer/FooterDescription";
import Footer from "./components/Footer/Footer";

const TodoApp = () => {
  return (
    <div className="main__container">
      <Header />
      <ToggleButton />
      <TodoInput />
      <TodoList />
      <Footer />
      <FooterDescription />
    </div>
  );
};

export default TodoApp;
