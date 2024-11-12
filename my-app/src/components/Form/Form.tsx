import styles from "./Form.module.scss";
import { useAppDispatch } from "../../hook";
import { useState } from "react";
import { addTodos } from "../../store/todoSlice";



const Form: React.FC = () => {

  const [inputValue, setInputValue] = useState("");
  const dispacth = useAppDispatch();

  const addTodo = (event: any) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      return;
    }

    dispacth(addTodos(inputValue));
    setInputValue("");
  };

  const handleChange = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <form
        className={styles.form__todo}
        onSubmit={addTodo}
      >
        <input
          className={styles.form__input}
          type="text"
          placeholder="Что нужно сделать?"
          value={inputValue}
          onChange={handleChange}
        />
        <button className={styles.form__submit} type="submit">
          OK
        </button>
      </form>
    </>
  );
};

export default Form;