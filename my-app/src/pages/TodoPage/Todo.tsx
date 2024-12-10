import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import List from '../../components/List/List';
import TodoForm from '../../components/TodoForm/TodoForm';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import { useAppDispatch } from '../../hook';
import { fetchTodos } from '../../store/todo/todoThunks';

export const TodoPage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTodos({ filter: 'all' }));
  }, [dispatch]);

  return (
    <div className='main__container'>
      <TodoForm />
      <ToggleButton />
      <List />
      <Footer />
    </div>
  );
};
