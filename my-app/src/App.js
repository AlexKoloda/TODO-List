import TodoInput from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/FooterNav";
import Header from "./components/Header";
import { useState } from "react";

const TodoApp = () => {
  const [tasks, setTasks] = useState([]);
  const [activeFilter, setActiveFilter] = useState();

  const handleAddTask = (newTasks) => {
    setTasks((prev) => [...prev, newTasks]);
  };

  const handleDelete = (id) => {
    const newTodos = tasks.filter((e) => e.id !== id);
    setTasks(newTodos);
  };

  const deleteAll = () => {
    setTasks([]);
  };

  const filterTask = (buttonType) => {
    switch (buttonType) {
      case "all":
        setTasks(tasks);
        break;
      case "active":
/*         activeFilter = tasks.filter((e) => e.isCompleted === false); */
        setActiveFilter(activeFilter);
        break;
      case "completed":
/*         activeFilter = tasks.filter((e) => e.isCompleted === true); */
        setActiveFilter(activeFilter);
        break;
    }
  };

  /*  const EditTask = (editTodo) => {

 const editTodos = tasks.map ((e) => {
   return {...e,}
  })

  setTasks(editTodos)

  } */

  const changeTask = (id) => {
    const completeTodos = tasks.map((e) => {
      if (e.id === id) {
        return { ...e, isCompleted: !e.isCompleted };
      }
      return e;
    });

    setTasks(completeTodos);
  };

  return (
    <div className="main__container">
      <Header />
      <TodoInput onAddTask={handleAddTask} />
      <TodoList
        tasks={tasks}
        onHandleDelete={handleDelete}
        onChangeTask={changeTask}
        /*  onEditTask = {EditTask} */
      />
      <Footer tasks={tasks} onDeleteAll={deleteAll} onFilterTask={filterTask} />
    </div>
  );
};

export default TodoApp;
