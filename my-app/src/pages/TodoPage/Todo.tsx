import { useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import List from '../../components/List/List';
import TodoForm from '../../components/TodoForm/TodoForm';
import ToggleButton from '../../components/ToggleButton/ToggleButton';
// TODO сделать отображение туду
export const TodoPage = () => {
  
  useEffect(() => {
    (async )

  }, []);

  return (
    <div className='main__container'>
      <TodoForm />
      <ToggleButton />
      <List />
      <Footer />
    </div>
  );
}