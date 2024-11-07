import styles from "../Header/Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>Список задач</h1>
    </header>
  );
};
export default Header;
