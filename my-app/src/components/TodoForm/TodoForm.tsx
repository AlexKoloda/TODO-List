import styles from "./TodoForm.module.scss";
import { useAppDispatch } from "../../hook";
import { addTodos } from "../../store/todoSlice";
import Form from "../Form/Form";

const TodoForm: React.FC = () => {
  const dispacth = useAppDispatch();

  const addTodo = (inputValue: string) => {
    dispacth(addTodos(inputValue));
  };

  return (
    <div className={styles.form__todo}>
      <Form
        onSubmit={addTodo}
        inputClassName={styles.form__input}
        buttonClassName={styles.form__submit}
        buttonTitle={"ок"}
        placeholderText= {"Что нужно сделать?"}
      />
    </div>
  );
};

export default TodoForm;
