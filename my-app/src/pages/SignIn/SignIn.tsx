import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/Form/Form';
import styles from './SignIn.module.scss';
import { useState } from 'react';
import { useAppDispatch } from '../../hook';
import { signIn } from '../../store/user/userThunks';

export const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [data, setData] = useState({
    email: '',
    password: '',
  });

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const inputs = [
    {
      name: 'email',
      type: 'email',
      inputClassName: styles.sign_in__input,
      placeholderText: 'Введите ваш email',
      inputValue: data.email,
      onValueChange: handleChangeValue,
    },
    {
      name: 'password',
      type: 'password',
      inputClassName: styles.sign_in__input,
      placeholderText: 'Введите ваш пароль',
      inputValue: data.password,
      onValueChange: handleChangeValue,
    },
  ];

  const handleSubmit = async () => {
    const user = await dispatch(signIn(data)).unwrap();
    
    if (user) {
    navigate('/');
    }
    setData({
      email: '',
      password: '',
    });
  };

  return (
    <div className='main__container'>
      <h1 className={styles.sign_in__title}> Войти </h1>
      <p className={styles.sign_in__description}>
        Войдите, что бы пользоваться индивидуальным списком задач.
      </p>
      <Form
        formClassName={styles.sign_in__form}
        buttonClassName={styles.sign_in__submit}
        buttonTitle={'Войти'}
        inputs={inputs}
        onSubmit={handleSubmit}
      />
      <p className={styles.sign_in__description}>
        Если нет аккаунта{' '}
        <Link className={styles.sign_in__link} to='/sign-up'>
          зарегистрируйтесь
        </Link>
      </p>
    </div>
  );
};
