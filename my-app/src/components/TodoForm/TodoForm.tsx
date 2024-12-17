
import { useAppDispatch } from '../../hook';
import Form from '../Form/Form';
import { useState } from 'react';
import { addNewTodo } from '../../store/todo/todoThunks';
import { TodoFormContainer } from './TodoForm.style';

const TodoForm: React.FC = () => {
  const [todoText, setTodoText] = useState('');
  
  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodoText(event.target.value.trim());
  };

  const dispacth = useAppDispatch();

  const addTodo = () => {
    dispacth(addNewTodo(todoText));
    setTodoText('')
  };

  return (
    <TodoFormContainer>
      <Form
      formClassName="form"
        inputs={[
          {
            type: 'text',
            inputClassName:"form__input",
            placeholderText: 'Что нужно сделать?',
            onValueChange: handleValueChange,
            inputValue: todoText,
          },
        ]}
        onSubmit={addTodo}
        buttonClassName="form__submit"
        buttonTitle={'ок'}
      />
    </TodoFormContainer>
  );
};

export default TodoForm;
