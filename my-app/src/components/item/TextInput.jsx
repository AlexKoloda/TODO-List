import { useState } from "react";
import styles from "./TodoItem.module.scss";

const TextInput = (props) => {
  const [value, setValue] = useState(props.initialValue);

  const handleSubmit = (ev) => {
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
    <form 
    className={styles.input_form}
    onSubmit={handleSubmit} 
    >
      <input
        className={props.inputClassName}
        value={value}
        onChange={handleValueChange}
      />
    </form>
  );
};

export default TextInput;
