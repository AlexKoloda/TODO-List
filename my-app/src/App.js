import TodoInput from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/FooterNav";
import Header from "./components/Header";
import { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTasks) => {
    setTasks((prev) => [...prev, newTasks]);
  };

  const handleDelete = (id) => {
    const newTodos = tasks.filter((e) => e.id !== id);
    setTasks(newTodos);
  };

  const deleteAll = (id) => {
    const filterTodos = tasks.filter((e) => e.id === id);
    setTasks(filterTodos);
  };

  const filterTask = (isCompleted) => {
    const filterTodos = [];
    if (isCompleted) {
      return filterTodos.filter((e) => e.isCompleted === true);
    }

    if (!isCompleted) {
      return filterTodos.filter((e) => e.isCompleted === false);
    }
  };

  const changeTask = (id) => {
  const completeTodos = tasks.map((e, index) => {
    if(index === id - 1) {
      return{ ...e, isCompleted: !e.isCompleted};
    }
    return e;
  })

  setTasks(completeTodos)

  };


  return (
    <div className="main__container">
      <Header />
      <TodoInput onAddTask={handleAddTask} />
      <TodoList
        tasks={tasks}
        onHandleDelete={handleDelete}
        onChangeTask={changeTask}
      />
      <Footer tasks={tasks} onDeleteAll={deleteAll} onFilterTask={filterTask} />
    </div>
  );
};

export default TodoApp;
