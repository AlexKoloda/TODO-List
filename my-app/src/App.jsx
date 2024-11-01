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
    setTodos((todo) => [...todo, newTodos]);
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
    const completeTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodos(completeTodos);
  };

  const editTodos = (id) => {
 
    const editedTodos = todos.map ((todo) => {
      if (todo.id === id) {
        return {...todo, text: 'test'}
      }
      return todo;
    }) 

    setTodos(editedTodos);
  }

  

  const filterTodos = () => {
    switch (curentFilter) {
      case "all":
        return todos;

      case "active":
        return todos.filter((todo) => !todo.isCompleted);

      case "completed":
        return todos.filter((todo) => todo.isCompleted);
    }
  };

  const filtredTodos = filterTodos();

  return (
    <div className="main__container">
      <Header />
      <TodoInput onAddTodos={handleAddTodos} />
      <TodoList
        todos={todos}
        filtredTodos={filtredTodos}
        onHandleDelete={handleDelete}
        onChangeTodos={changeTodos}
        onEditTodos = {editTodos}
      />
      <Footer
        filtredTodos={filtredTodos}
        onDeleteAll={deleteAll}
        onChangeFilter={changeFilter}
      />
      <FooterDescription />
    </div>
  );
};

export default TodoApp;
