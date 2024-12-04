import { useState } from 'react';
import { toggleComplete,deleteTodo,Todo,editTodo } from '../../store/todoSlice';
import Form from '../Form/Form';
import styles from './ListItem.module.scss';
import cn from 'classnames';
import { useAppDispatch } from '../../hook';

interface ListItemProps {
  todo: Todo;
}

const ListItem: React.FC<ListItemProps> = ({ todo }) => {
  const dispatch = useAppDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('click')
    setText(event.currentTarget.value);
  };


  const handleClick = () => {
    dispatch(toggleComplete(todo.id));
  };

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleClickDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  const handleSubmitChanges = () => {
    dispatch(editTodo({ id: todo.id, text}));
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
