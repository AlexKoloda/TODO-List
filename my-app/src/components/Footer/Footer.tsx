import Count from '../Count/Count';
import { useAppDispatch, useAppSelector } from '../../hook';
import { Filters } from '../../store/todo/todoSlice';
import { todosListSelector } from '../../store/selectors';
import { removeAllTodo } from '../../store/todo/todoThunks';
import { useSearchParams } from 'react-router-dom';
import { FooterContainer } from './Footer.style';

const buttons = [
  { text: 'Все', id: Filters.all },
  { text: 'Активные', id: Filters.active },
  { text: 'Завершенные', id: Filters.completed },
];

const Footer = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const dispacth = useAppDispatch();
  const todos = useAppSelector(todosListSelector);
  const length = todos.filter((todo) => !todo.isCompleted).length;

  const handleClickDeleteAll = () => {
    dispacth(removeAllTodo());
  };

  return (
    <FooterContainer>
    <nav className="footer__nav">
      {<Count length={todos.length} />}
      <ul className="footer__list">
        {buttons.map((button) => {
          return (
            <li key={button.id}>
              <button
                className="footer__button"
                onClick={() => {
                  searchParams.set('filter', button.id);
                  setSearchParams(searchParams);
                }}
              >
                {button.text}
              </button>
            </li>
          );
        })}
        <li>
          <button
            className="footer__delete"
            onClick={handleClickDeleteAll}
          >
            ✕
          </button>
        </li>
      </ul>
    </nav>
    </FooterContainer>
  );
};

export default Footer;
