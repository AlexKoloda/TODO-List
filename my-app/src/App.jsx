import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import FooterDescription from "./components/FooterDescription";
import { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [curentFilter, setCurrentFilter] = useState("all");

  const handleAddTodos = (newTodos) => {
    setTodos((prev) => [...prev, newTodos]);
  };

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
  };

  const deleteAll = () => {
    setTodos([]);
  };

  const changeFilter = (buttonId) => {
    setCurrentFilter(buttonId);
  };

  const changeTodos = (id) => {
    const completedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodos(completedTodos);
  };

  const changeAllTodos = () => {
    const completedAllTodos = todos.map((todo) => {
    return { ...todo, isCompleted: !todo.isCompleted }
    });

    setTodos(completedAllTodos);

  }

  const filterTodos = () => {
    switch (curentFilter) {
      case "all":
        return todos;

      case "active":
        return todos.filter((todo) => !todo.isCompleted);

      case "completed":
        return todos.filter((todo) => todo.isCompleted);

      default:
        return todos;
    }
  };

  const handleEditTodos = (todo) => {
    console.log(todo)
    const editedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return todo;
      } else {
        return t;
      }
    });
    console.log(editedTodos)
    setTodos(editedTodos);
  };

  const filtredTodos = filterTodos();

  return (
    <div className="main__container">
      <Header />
      <TodoInput 
      todos = {todos}
      onAddTodos={handleAddTodos} 
      onChangeAllTodos={changeAllTodos}
      />
      <TodoList
        todos={todos}
        filtredTodos={filtredTodos}
        onHandleDelete={handleDelete}
        onChangeTodos={changeTodos}
        onEditTodos={handleEditTodos}
      />
      <Footer
        todos = {todos}
        filtredTodos={filtredTodos}
        onDeleteAll={deleteAll}
        onChangeFilter={changeFilter}
      />
      <FooterDescription />
    </div>
  );
};

export default TodoApp;
