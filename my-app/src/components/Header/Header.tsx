import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hook';
import { selectUser } from '../../store/selectors';
import styles from "../Header/Header.module.scss";

type HeaderType = {
text: string;
}


const Header: React.FC<HeaderType> = (props) => { 
const users = useAppSelector(selectUser)
console.log(users.firstName +  " " + users.lastName)
    return (
    <>
      <div className={styles.header__box}>
        <p className={styles.header__auth}>
         Добро пожаловать {users.firstName} !
        </p>
        <Link className={styles.header__link} to='/sign-in'>
         Сменить пользователя 
        </Link>
      </div>
    <header className={styles.header}>
      <h1 className={styles.header__title}>{props.text}</h1>
    </header>
          </>
  );
};
export default Header;