export interface InputProps {
  name?: string;
  type: string;
  autocomplete?: string,
  required?: string,
  onBlur?: () => void;
  initialValue?: string;
  inputClassName?: string;
  placeholderText?: string;
  inputValue?: string;
  onValueChange?: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = (props) => {
  return (
    <input
      name={props.name}
      type={props.type}
      placeholder={props.placeholderText}
      value={props.inputValue}
      onChange={props.onValueChange}
      className={props.inputClassName}
      autoFocus
      onBlur={props.onBlur}
    />
  );
};

export default Input;
