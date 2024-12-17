import React from 'react';
import Input, { InputProps } from '../Input/Input';
import { FormContainer } from './Form.style';

interface FormProps {
  inputs: InputProps[];
  onSubmit?: () => void;
  buttonClassName?: string;
  buttonTitle?: string;
  formClassName?: string;
}

const Form: React.FC<FormProps> = (props) => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if( !props.onSubmit) {
   return;   
    }
    props.onSubmit();
  };

  return (
    <FormContainer>
    <form className={props.formClassName} onSubmit={handleSubmit}>
      {props.inputs.map((input, index) => {
        return (
          <Input
          name={input.name}
          key={index}
          type={input.type}
          autocomplete={input.autocomplete}
          required={input.required}
          placeholderText={input.placeholderText}
          initialValue={input.initialValue}
          inputClassName={input.inputClassName}
          onBlur={input.onBlur}
          inputValue={input.inputValue}
          onValueChange={input.onValueChange}
          />
        );
      })}
      {props.buttonTitle && (
        <button className={props.buttonClassName} type='submit'>
          {props.buttonTitle}
        </button>
      )}
    </form>
    </FormContainer>
  );
};

export default Form;


