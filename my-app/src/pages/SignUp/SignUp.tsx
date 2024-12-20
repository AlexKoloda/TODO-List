import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { useState } from 'react';
import { useAppDispatch } from '../../hook';
import { signUp } from '../../store/user/userThunks';
import { StyledWrapper } from './SignUp.style';

const SignUp = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [createUser, setCreateUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCreateUser((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const inputs = [
    {
      name: 'firstName',
      type: 'text',
      inputClassName: "sign_up__input",
      placeholderText: 'Введите ваше имя',
      inputValue: createUser.firstName,
      onValueChange: handleChangeValue,
    },
    {
      name: 'lastName',
      type: 'text',
      inputClassName: "sign_up__input",
      placeholderText: 'Введите вашу фамилию',
      inputValue: createUser.lastName,
      onValueChange: handleChangeValue,
    },
    {
      name: 'email',
      type: 'email',
      inputClassName: "sign_up__input",
      placeholderText: 'Введите ваш email',
      inputValue: createUser.email,
      onValueChange: handleChangeValue,
    },
    {
      name: 'password',
      type: 'password',
      inputClassName: "sign_up__input",
      placeholderText: 'Введите ваш пароль',
      inputValue: createUser.password,
      onValueChange: handleChangeValue,
    },
  ];

  const handleSubmit = async () => {
    try {
      const user = await dispatch(signUp(createUser)).unwrap();
      if (user) {
        navigate('/');
      }
      setCreateUser({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
      });
    } catch (error) {}
  };

  return (
    <StyledWrapper>
      <h1 className="sign_up__title">Добро пожаловать</h1>
      <p className="sign_up__description">
        Создайте аккаунт, что бы пользоваться индивидуальным списком задач.
      </p>

      <Form
        formClassName={"sign_up__form"}
        buttonClassName={"sign_up__submit"}
        buttonTitle={'Создать'}
        inputs={inputs}
        onSubmit={handleSubmit}
      />

      <p className="sign_up__description">
        Все поля необходимо заполнить. Уже есть аккаунт?{' '}
        <Link className="sign_up__link" to='/sign-in'>
          Войдите
        </Link>
      </p>
    </StyledWrapper>
  );
};

export default SignUp;
