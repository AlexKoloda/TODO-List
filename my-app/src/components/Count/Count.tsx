import styles from "./Count.module.scss";
import { pluralize } from "../../ util/pluralize";


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
