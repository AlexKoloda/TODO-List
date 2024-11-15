import React, { useState } from "react";
import styles from "./Form.module.scss";

interface FormProps {
  onSubmit?: (text: string) => void;
  initialValue?: string;
  inputClassName?: string;
  buttonClassName?: string;
  buttonTitle?: string;
  placeholderText?: string;
}

const Form: React.FC<FormProps> = (props) => {
  const [inputValue, setInputValue] = useState(props.initialValue || "");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (inputValue.trim()) {
      if (props.onSubmit) {
        props.onSubmit(inputValue);
      }

      setInputValue("");
    }
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleClickOutside = () => {
    setInputValue(props.initialValue || "");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={props.placeholderText}
        value={inputValue}
        onChange={handleValueChange}
        className={props.inputClassName}
        autoFocus
        onBlur={handleClickOutside}
      />
      {props.buttonTitle && (
        <button className={props.buttonClassName} type="submit">
          {props.buttonTitle}
        </button>
      )}
    </form>
  );
};

export default Form;
