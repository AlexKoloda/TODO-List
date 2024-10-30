import TodoInput from "./components/Input";
import TodoList from "./components/TodoList";
import Footer from "./components/FooterNav";
import Header from "./components/Header";
import { useState } from "react";

const Todo = () => {
  const [tasks, setTasks] = useState([]); 

  const handleAddTask = (newTasks) => {
    setTasks((prev) => [...prev, newTasks]);
  }


  return (   
    <div className="main__container">
      <Header />
      <TodoInput onAddTask={handleAddTask} />
      <TodoList tasks = {tasks} setTasks = {setTasks}/>
      <Footer tasks = {tasks} />
    </div>
  );
};

export default Todo;
