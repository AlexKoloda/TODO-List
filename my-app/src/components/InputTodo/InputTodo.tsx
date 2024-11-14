import styles from "./InputTodo.module.scss";
import { useAppDispatch } from "../../hook";
import { addTodos } from "../../store/todoSlice";
import Form from "../Form/Form";

const Input: React.FC = () => {
  const dispacth = useAppDispatch();

  const addTodo = (inputValue: string) => {
    dispacth(addTodos(inputValue));
  };

  return (
    <>
      <Form
        onAddTodo={addTodo}
        inputClassName={styles.form__input}
        buttonClassName={styles.form__submit}
      />
    </>
  );
};

export default Input;
