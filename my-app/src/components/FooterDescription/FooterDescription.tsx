import styles from "./FooterDescription.module.scss";

type FooterType = {
  text: string;
}

const FooterDescription: React.FC<FooterType> = (props) => {
  return (
    <div className={styles.footer__description}>
      <p>{props.text}</p>
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