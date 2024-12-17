import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hook';
import { HeaderContainer } from './Header.style';

type HeaderType = {
  text: string;
};

const Header: React.FC<HeaderType> = (props) => {
  const user = useAppSelector(state => state.user.user);
  return (
    <HeaderContainer>
      <div className='header__box'>
        <p className='header__auth'>Добро пожаловать {user?.firstName} !</p>
        <Link className='header__link' to='/sign-in'>
          Сменить пользователя
        </Link>
      </div>
      <header className='header'>
        <h1 className='header__title'> {props.text} </h1>
      </header>
    </HeaderContainer>
  );
};
export default Header;
