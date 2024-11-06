import styles from "./TodoInput.module.scss";
import cn from "classnames";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodos, toggleCompleteAll } from "../store/TodoSlice";
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
        className={cn({
          [styles.main__active]: !todos.length,
          [styles.main__active__visible]: todos.length,
        })}
        onClick={(event) => {
          event.stopPropagation();
          dispacth(toggleCompleteAll());
        }}
      >
        отметить все
      </button>
      <form
        className={styles.form__todo}
        onSubmit={(event) => {
          event.preventDefault();
          addTodo();
        }}
      >
        <input
          className={styles.todo__input}
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
