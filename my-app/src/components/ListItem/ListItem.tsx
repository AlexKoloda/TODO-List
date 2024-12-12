import { useState } from 'react';
import Form from '../Form/Form';
import styles from './ListItem.module.scss';
import cn from 'classnames';
import { useAppDispatch } from '../../hook';
import { Todo } from '../../types/todo';
import { changeText, completeStatus, removeTodo } from '../../store/todo/todoThunks';

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
      inputClassName: styles.list__input,
      placeholderText: 'Что нужно сделать?',
      inputValue: text,   
      onBlur: handleClickOutside, 
      onValueChange: handleValueChange,
    },
  ];

  return (
    <li className={styles.list__item}>
      <div
        className={cn({
          [styles.list__checkbox]: !todo.isCompleted,
          [styles.list__checkbox__check]: todo.isCompleted,
        })}
        onClick={handleClick}
      ></div>
      <div
        className={cn({
          [styles.list__text]: !todo.isCompleted,
          [styles.list__text__completed]: todo.isCompleted,
        })}
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
        className={styles.list__delete}
        type='button'
        onClick={handleClickDelete}
      >
        ✕
      </button>
    </li>
  );
};

export default ListItem;
