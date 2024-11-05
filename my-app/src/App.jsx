import "./App.css";
import TodoInput from "./components/input/TodoInput";
import TodoList from "./components/list/TodoList";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import FooterDescription from "./components/footer/FooterDescription";
import React, { useState } from "react";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [currentFilter, setCurrentFilter] = useState("all");

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

  const toggleFilter = (buttonId) => {
    setCurrentFilter(buttonId);
  };

  const toggleComplete = (id) => {
    const completedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted };
      }
      return todo;
    });

    setTodos(completedTodos);
  };

  const toggleCompleteAll = () => {
    const isAllCompleted = todos.find((todo) => !todo.isCompleted);
    const completedAllTodos = todos.map((todo) => {
      if (todo.isCompleted && isAllCompleted) {
        return todo;
      }
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

  const filteredTodos = todos.filter((todo) => {
    switch (currentFilter) {
      case "active":
        return !todo.isCompleted;
      case "completed":
        return todo.isCompleted;
      default:
        return todo;
    }
  });

  return (
    <div className="main__container">
      <Header />
      <TodoInput
        todos={todos}
        onAddTodos={handleAddTodos}
        onToggleCompleteAll={toggleCompleteAll}
      />
      <TodoList
        todos={todos}
        filtredTodos={filteredTodos}
        onHandleDelete={handleDelete}
        onToggleComplete={toggleComplete}
        onEditTodos={handleEditTodos}
      />
      <Footer
        todos={todos}
        filtredTodos={filteredTodos}
        onDeleteAll={deleteAll}
        onToggleFilter={toggleFilter}
      />
      <FooterDescription />
    </div>
  );
};

export default TodoApp;
