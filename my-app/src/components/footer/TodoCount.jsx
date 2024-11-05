import styles from "../footer/Footer.module.scss";

const TodoCount = ({ length }) => {
  const getCountText = (length) => {
    let countText = "";

    switch (true) {
      case length === 0:
        countText = "задач";
        break;

      case length === 1:
        countText = "задача";
        break;

      case length <= 4:
        countText = "задачи";
        break;
      case (length = 21):
        countText = "задача";
        break;
      case length > 21:
        countText = "задачи";
        break;

      default:
        countText = "задач";
    }
    return countText;
  };

  return (
    <div className={styles.footer__text}>
      {length} {getCountText(length)}
    </div>
  );
};

export default TodoCount;
