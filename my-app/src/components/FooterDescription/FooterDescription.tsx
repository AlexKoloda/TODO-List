import styles from "./FooterDescription.module.scss";

const FooterDescription = () => {
  return (
    <div className={styles.footer__description}>
      <p>Двойной клик редактировать задачи</p>
      <p>
        Создано{" "}
        <a href="https://github.com/AlexKoloda" className={styles.footer__description__link}>
          Алексеем Колодой
        </a>
      </p>
      <p>FUSION Interns</p>
    </div>
  );
};

export default FooterDescription;