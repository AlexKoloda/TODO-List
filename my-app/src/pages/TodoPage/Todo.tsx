import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import List from '../../components/List/List';
import TodoForm from '../../components/TodoForm/TodoForm';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import { useAppDispatch, useAppSelector } from '../../hook';
import { selectFilters } from '../../store/selectors';
import { fetchTodos } from '../../store/todo/todoThunks';
import { useSearchParams } from 'react-router-dom';


export const TodoPage = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector(selectFilters)
  const [searchParams, setSearchParams] = useSearchParams();
  setSearchParams({ filter: filters })
  const filter = searchParams.get('filter');
  

     useEffect(() => {   
      if (filter) {
        dispatch(fetchTodos({filter: filter}));
      }
      debugger;
   }, [dispatch, filter,]);

  return (
    <div className='main__container'>
      <TodoForm />
      <ToggleButton />
      <List />
      <Footer />
    </div>
  );
};
