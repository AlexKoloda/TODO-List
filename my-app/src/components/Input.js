import { useState } from "react";
let id = 0;

const TodoInput = ({ onAddTask }) => {
  const [inputValue, setInputValue] = useState("");
  const handleClick = () => {
    if (!inputValue.trim()) {
      return;
    }

    const newTask = {
      id: createUniqueId(),
      text: inputValue,
      isCompleted: false,
    };

    onAddTask(newTask);
    setInputValue("");
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const createUniqueId = () => {
    return (id += 1);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        className="main__input"
        type="text"
        placeholder="Что нужно сделать?"
        value={inputValue}
        onChange={handleChange}
      />
      <button className="main__submit" type="submit" onClick={handleClick}>
        OK
      </button>
    </form>
  );
};

export default TodoInput;
