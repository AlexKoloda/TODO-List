import { Link } from 'react-router-dom';
import styles from './NotFound.module.scss';

export const NotFoundPage = () => {
  return (
    <div className={styles.error__notFound}>
      <h1 className={styles.error__code}>404</h1>
      <h1 className={styles.error__text}>
        Упс! Страница не найдена! Перейти{' '}
        <Link className={styles.error__link} to='/'>
          домой.
        </Link>
      </h1>
    </div>
  );
};
