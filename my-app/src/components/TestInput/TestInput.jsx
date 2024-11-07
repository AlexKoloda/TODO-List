/* import { useState } from "react";
import styles from "../TodoItem/TodoItem.module.scss";

const TestInput = (props) => {
  const [value, setValue] = useState(props.initialValue);

  const onSubmit = (ev) => {
    ev.preventDefault();
    if (!value.trim()) {
      return;
    }
    props.onSubmit(value);
  };

  const handleValueChange = (ev) => {
    setValue(ev.target.value);
  };

  return (
    <form onSubmit={onSubmit} className={styles.main__form}>
      <input
        className={props.inputClassName}
        value={value}
        onChange={handleValueChange}
      />
    </form>
  );
};

export default TestInput; */