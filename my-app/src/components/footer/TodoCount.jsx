import styles from "../footer/Footer.module.scss";

const pluralize = (num, [one, some, many]) => {
  let number = num;

  if (number === null) {
    return "";
  }

  number = Number(number);

  if (Number.isNaN(number)) {
    return "";
  }

  number %= 100;

  if (number >= 5 && number <= 20) {
    return many;
  }

  number %= 10;

  if (number === 1) {
    return one;
  }

  if (number >= 2 && number <= 4) {
    return some;
  }

  return many;
};

const TodoCount = ({ length }) => {
  return (
    <p className={styles.footer__text}>
      {length} {pluralize(length, ["задача", "задачи", "задач"])}
    </p>
  );
};

export default TodoCount;
