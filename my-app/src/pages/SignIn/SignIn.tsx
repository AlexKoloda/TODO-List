import { Link, useLocation, useNavigate } from 'react-router-dom';
import Form from '../../components/Form/Form';
import styles from './SignIn.module.scss';

export const SignIn = () => {

const navigate = useNavigate();
const location = useLocation();

const fromPage = location.state?.from?.pathname || '/sign-up';

 



  return (
    
    <div className='main__container'>
      {fromPage}
      <h1 className={styles.signIn__title}> Войти </h1>
      <p className={styles.signUp__description}>
        Войдите, что бы пользоваться индивидуальным списком задач.
      </p>
      <Form
        placeholderText={'Введите email?'}
        inputClassName={styles.signIn__input}
      />
      <Form
        buttonTitle={'Войти'}
        placeholderText={'Введите пароль?'}
        inputClassName={styles.signIn__input}
        buttonClassName={styles.signIn__submit}
      />
      <p className={styles.signIn__description}>
        Если нет аккаунта {' '}
        <Link className={styles.signIn__link} to='/sign-up'>
           зарегистрируйтесь
        </Link>
      </p>
    </div>
  );
};
