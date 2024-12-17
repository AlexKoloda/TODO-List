import ListItem from '../ListItem/ListItem';
import styles from './List.module.scss';
import { useAppSelector } from '../../hook';
import { todosListSelector } from '../../store/selectors';
import styled from 'styled-components';
import { ListContainer } from './List.style';

const List: React.FC = () => {
  const todosList = useAppSelector(todosListSelector);

  return (
    <ListContainer>
      <section>
        <ul className='list'>
          {todosList.map((todo) => {
            return <ListItem key={todo.id} todo={todo} />;
          })}
        </ul>
      </section>
    </ListContainer>
  );
};

export default List;
