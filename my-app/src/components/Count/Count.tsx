import styles from "./Count.module.scss";

const pluralize = (num: number, [one, some, many]: string[]) => {
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

type CountProps = {
  length: number;
};

const Count: React.FC<CountProps> = ({ length }) => {
  return (
    <p className={styles.count__text}>
      {length} {pluralize(length, ["задача", "задачи", "задач"])}
    </p>
  );
};

export default Count;
