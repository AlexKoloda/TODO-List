import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, changeAllTodos } from "../store/TodoSlice";
import { selectFiltredTodos } from "../store/selectors";


const TodoInput = () => {
  const todos = useSelector(selectFiltredTodos);
  const [inputValue, setInputValue] = useState("");
  const dispacth = useDispatch();

  const addTodo = () => {
    if (!inputValue.trim()) {
      return;
    }

    dispacth(addTodos(inputValue));
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <button
        className={!todos.length ? "main__active" : "main__active--visible"}
        onClick={(event) => {
          event.stopPropagation();
          dispacth(changeAllTodos());
         }}
      >
        отметить все завершенными
      </button> 
      <form
        onSubmit={(event) => {
          event.preventDefault();
          addTodo();
        }}
      >
        <input
          className="todo__input"
          type="text"
          placeholder="Что нужно сделать?"
          value={inputValue}
          onChange={handleChange}
        />
        <button className="main__submit" type="submit">
          OK
        </button>
      </form>
    </>
  );
};

export default TodoInput;
