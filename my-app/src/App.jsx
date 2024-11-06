import "./App.css";
import TodoInput from "./components/input/TodoInput";
import TodoList from "./components/list/TodoList";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import FooterDescription from "./components/footer/FooterDescription";
import ToggleButton from "./components/toggleButton/ToggleButton";

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
