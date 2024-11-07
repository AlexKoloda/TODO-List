import styles from "../footer/Footer.module.scss";

const pluralize = (num, [one, some, many]) => {
  const pluralRules = new Intl.PluralRules("ru-RU"); 
 const pluralForm = pluralRules.select(num); 
 
  switch (pluralForm) {
    case "one":
      return one;
    case "few":
      return some;
    default:
      return many;
  }
};

const TodoCount = ({ length }) => {
  return (
    <p className={styles.footer__text}>
       {length} {pluralize(length, ["задача", "задачи", "задач"])}
    </p>
  );
};

export default TodoCount;