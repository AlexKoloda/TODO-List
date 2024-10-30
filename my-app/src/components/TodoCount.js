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

    default:
      countText = "задач";
  }
  return countText;
};

const TodoCount = ({ tasks }) => {
  return (
    <span className="footer__text">
      {tasks.length} {getCountText(tasks.length)}
    </span>
  );
};

export default TodoCount;
