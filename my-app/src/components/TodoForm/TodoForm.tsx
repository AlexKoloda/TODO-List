import styles from './TodoForm.module.scss';
import { useAppDispatch } from '../../hook';
import Form from '../Form/Form';
import { useState } from 'react';
import { addNewTodo } from '../../store/todo/todoThunks';

const TodoForm: React.FC = () => {
  const [todoText, setTodoText] = useState('');
  
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value);
  };

  const dispacth = useAppDispatch();

  const addTodo = () => {
    dispacth(addNewTodo(todoText));
    setTodoText('')
  };

  return (
    <div className={styles.form__todo}>
      <Form
      formClassName={styles.form}
        inputs={[
          {
            type: 'text',
            inputClassName: styles.form__input,
            placeholderText: 'Что нужно сделать?',
            onValueChange: handleValueChange,
            inputValue: todoText,
          },
        ]}
        onSubmit={addTodo}
        buttonClassName={styles.form__submit}
        buttonTitle={'ок'}
      />
    </div>
  );
};

export default TodoForm;
