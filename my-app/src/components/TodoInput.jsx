import { useState } from "react";
let id = 0;

const TodoInput = ({ onAddTodos, onChangeAllTodos, todos }) => {
  const [inputValue, setInputValue] = useState("");

  const handleClick = () => {
    if (!inputValue.trim()) {
      return;
    }

    const newTodos = {
      id: createUniqueId(),
      text: inputValue,
      isCompleted: false,
    };

    onAddTodos(newTodos);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const createUniqueId = () => {
    return (id += 1);
  };

  return (
    <>
    <button className = {
      !todos.length ? "main__active" : "main__active--visible"
    }
    onClick={(event) => {
      event.stopPropagation();
      onChangeAllTodos();
    }}
    >
    отметить все завершенными  
    </button>  
    <form
      onSubmit={(event) => {
        event.preventDefault();
        handleClick();
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
