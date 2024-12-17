import { Link } from 'react-router-dom';
import { ErrorContainer } from './NotFound.style';


const NotFoundPage = () => {
  return (
    <ErrorContainer >
      <h1 className="error__code">404</h1>
      <h1 className="error__text">
        Упс! Страница не найдена! Перейти{' '}
        <Link className="error__link" to='/'>
          домой.
        </Link>
      </h1>
    </ErrorContainer>
  );
};

export default NotFoundPage;

