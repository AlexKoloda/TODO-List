import { useState } from 'react';
import Form from '../Form/Form';
import { useAppDispatch } from '../../hook';
import { Todo } from '../../types/todo';
import { changeText, completeStatus, removeTodo } from '../../store/todo/todoThunks';
import { ListItemStyled } from './ListItem.style';

interface ListItemProps {
  todo: Todo;
}

const ListItem: React.FC<ListItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };


  const handleClick = () => {
    dispatch(completeStatus(todo));
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleClickDelete = () => {
    dispatch(removeTodo(todo.id));
  };

  const handleSubmitChanges = () => {
    dispatch(changeText({id: todo.id, text, isCompleted: todo.isCompleted}));
    setIsEditing(false);
  };

  const handleClickOutside = () => {
    setIsEditing(false);
  };

  const inputs = [
    {
      type: 'text',
      inputClassName: "list__input",
      placeholderText: 'Что нужно сделать?',
      inputValue: text,   
      onBlur: handleClickOutside, 
      onValueChange: handleValueChange,
    },
  ];

  return (
    <ListItemStyled
    isComplete={todo.isCompleted}>
    <li className="list__item">
      <div
        className="list__checkbox"
        onClick={handleClick}
        ></div>
      <div
        className="list__text"
        onDoubleClick={handleDoubleClick}
        >
         {isEditing ? (
           <Form
           inputs={inputs}
           onSubmit={handleSubmitChanges}
           />
          ) : (
            todo.text
          )} 
      </div>
      <button
        className="list__delete"
        type='button'
        onClick={handleClickDelete}
        >
        ✕
      </button>
    </li>
  </ListItemStyled>
  );
};

export default ListItem;
