import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import List from '../../components/List/List';
import TodoForm from '../../components/TodoForm/TodoForm';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import { useAppDispatch } from '../../hook';
import { fetchTodos } from '../../store/todo/todoThunks';
import { useSearchParams } from 'react-router-dom';

const TodoPage = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get('filter');

  useEffect(() => {
    dispatch(fetchTodos({ filter: filter || 'all' }));
  }, [dispatch, filter]);

  return (
    <div className='main__container'>
      <TodoForm />
      <ToggleButton />
      <List />
      <Footer />
    </div>
  );
};

export default TodoPage;