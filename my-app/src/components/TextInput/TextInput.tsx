import { useState } from "react";
import styles from "./TextInput.module.scss"

interface TextInputProps {
  initialValue: string,
  inputClassName: string,
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const [value, setValue] = useState(props.initialValue);

  const onSubmit = (event: React.FormEvent<HTMLLabelElement>) => {
    event.preventDefault();
    if (!value.trim()) {
      return;
    }
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <label onSubmit={onSubmit} className={styles.main__form}>
      <input
        className={props.inputClassName}
        value={value}
        onChange={handleValueChange}
      />
    </label>
  );
};

export default TextInput;