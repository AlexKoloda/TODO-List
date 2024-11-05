import "./App.css";
import TodoInput from "./components/input/TodoInput";
import TodoList from "./components/list/TodoList";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import FooterDescription from "./components/footer/FooterDescription";
import React, { useState } from "react";

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
      if(!todo.isCompleted) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      if (todo.isCompleted && !todo) {
        return { ...todo, isCompleted: !todo.isCompleted}
      }
       return todo;
    });

    setTodos(completedAllTodos);
  };

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



/*    const filtredTodos2 = () => {
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
  }; */


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

  const filtredTodos = filterTodos();

  return (
    <div className='main__container'>
      <Header />
      <TodoInput
        todos={todos}
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
        todos={todos}
        filtredTodos={filtredTodos}
        onDeleteAll={deleteAll}
        onChangeFilter={changeFilter}
      />
      <FooterDescription />
    </div>
  );
};

export default TodoApp;
