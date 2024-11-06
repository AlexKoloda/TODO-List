import styles from "./TodoInput.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../../store/todoSlice";

const TodoInput = () => {
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
