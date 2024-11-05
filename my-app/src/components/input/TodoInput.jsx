import { useState } from "react";
import styles from "./TodoInput.module.scss";
import cn from "classnames";

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
      <button
        className={cn({
          [styles.main__active]: !todos.length,
          [styles.main__active__visible]: todos.length,
        })}
        onClick={(event) => {
          event.stopPropagation();
          onChangeAllTodos();
        }}
      >
        отметить все завершенными
      </button>
      <form
        className={styles.form__todo}
        onSubmit={(event) => {
          event.preventDefault();
          handleClick();
        }}
      >
        <input
          className={[styles.todo__input]}
          type="text"
          placeholder="Что нужно сделать?"
          value={inputValue}
          onChange={handleChange}
        />
        <button className={styles.main__submit} type="submit">
          OK
        </button>
      </form>
    </>
  );
};

export default TodoInput;
