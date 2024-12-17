import { Link, useNavigate } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { useState } from 'react';
import { useAppDispatch } from '../../hook';
import { signIn } from '../../store/user/userThunks';
import { logOut } from '../../store/user/userSlice';
import React from 'react';
import { StyledWrapper } from './SignIn.style';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  dispatch(logOut());

  const [state, setState] = React.useState(false);

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
      inputClassName: "sign_in__input",
      placeholderText: 'Введите ваш email',
      inputValue: data.email,
      autocomplete: 'email',
      required: 'required',
      onValueChange: handleChangeValue,
    },
    {
      name: 'password',
      type: 'password',
      required: 'required',
      autocomplete: 'current-password',
      inputClassName: "sign_in__input",
      placeholderText: 'Введите ваш пароль',
      inputValue: data.password,
      onValueChange: handleChangeValue,
    },
  ];

  const handleSubmit = async () => {
    try {
      const user = await dispatch(signIn(data)).unwrap();

      if (user) {
        navigate('/');
      }
      setData({
        email: '',
        password: '',
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledWrapper>
      <h1 className="sign_in__title"> Войти </h1>
      <p className="sign_in__description">
        Войдите, что бы пользоваться индивидуальным списком задач.
      </p>
      <Form
        formClassName={"sign_in__form"}
        buttonClassName={"sign_in__submit"}
        buttonTitle={'Войти'}
        inputs={inputs}
        onSubmit={handleSubmit}
      />
      <p className="sign_in__description">
        Если нет аккаунта{' '}
        <Link className="sign_in__link" to='/sign-up'>
          зарегистрируйтесь
        </Link>
      </p>
    </StyledWrapper>
  );
};

export default SignIn;
