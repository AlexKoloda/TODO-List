import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import styles from './SignUp.module.scss';

export const SignUp = () => {
  return (
    <div className='main__container'>
      <h1 className={styles.signUp__title}>Добро пожаловать</h1>
      <p className={styles.signUp__description}>
        Создайте аккаунт, что бы пользоваться индивидуальным списком задач.
      </p>
      <form>

      <Form
        placeholderText={'Введите имя'}
        inputClassName={styles.signUp__input}
        />
      <Form
        placeholderText={'Введите Фамилию?'}
        inputClassName={styles.signUp__input}
        />
      <Form
        placeholderText={'Введите email?'}
        inputClassName={styles.signUp__input}
        />
      <Form
        placeholderText={'Введите пароль?'}
        inputClassName={styles.signUp__input}
        
        />
      <Form
        placeholderText={'Введите дату рождения?'}
        inputClassName={styles.signUp__input}
        buttonClassName={styles.signUp__submit}
        buttonTitle={'Создать'}      />
      </form>
      <p className={styles.signUp__description}>
        Все поля необходимо заполнить.
        Уже есть аккаунт? <Link className={styles.signUp__link} to="/sign-in">Войдите</Link>
      </p>

    </div>
  );
};
