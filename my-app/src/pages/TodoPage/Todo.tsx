import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import List from '../../components/List/List';
import TodoForm from '../../components/TodoForm/TodoForm';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
import { useAppDispatch, useAppSelector } from '../../hook';
import { fetchTodos } from '../../store/todo/todoThunks';
import { selectFilters, selectUser } from '../../store/selectors';
import { fetchUser } from '../../store/user/userThunks';
import { useNavigate } from 'react-router-dom';

export const TodoPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser)
  const filters = useAppSelector(selectFilters)
  
  useEffect(() => {
    if(user){
      dispatch(fetchTodos({filter: filters}));
      dispatch(fetchUser({id: user.id}))
    } else navigate('/sign-in');    
  }, [dispatch, filters, navigate, user]);

  return (
    <div className='main__container'>
      <TodoForm />
      <ToggleButton />
      <List />
      <Footer />
    </div>
  );
};
