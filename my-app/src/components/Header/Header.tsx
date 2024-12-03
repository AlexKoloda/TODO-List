import styles from "../Header/Header.module.scss";

type HeaderType = {
text: string;
}


const Header: React.FC<HeaderType> = (props) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>{props.text}</h1>
    </header>
  );
};
export default Header;