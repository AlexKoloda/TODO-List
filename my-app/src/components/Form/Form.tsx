import React, { useState } from "react";
import styles from "./Form.module.scss";

interface FormProps {
  onAddTodo?: (inputValue: string) => void;
  initialValue?: string;
  onSubmitChange?: (text: string) => void;
  inputClassName?: string;
  buttonClassName?: string;
}

const Form: React.FC<FormProps> = (props) => {
  const [inputValue, setInputValue] = useState(props.initialValue || "");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim()) {

      if (props.onSubmitChange) {
        props.onSubmitChange(inputValue);
        return;
      }

      if (props.onAddTodo) {
        props.onAddTodo(inputValue);
        setInputValue("");
      }
    }
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Что нужно сделать?"
        value={inputValue}
        onChange={handleValueChange}
        className={props.inputClassName}
      />
      <button
        className={props.buttonClassName}
        type="submit"
      >
        OK
      </button>
    </form>
  );
};

export default Form;
