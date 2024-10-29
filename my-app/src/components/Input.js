import { useState } from "react";

const TodoInput = ({onAddTask}) => {
  const [inputValue, setInputValue] = useState(""); 
  
  const handleClick = () => { 
    if (!inputValue.trim() ) {
      return;
    } 
    onAddTask(inputValue);
    setInputValue('');
  };


  const handleChange = (event) => {
    setInputValue(event.target.value);     
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <input
        className="main__input"
        type="text"
        placeholder="Что нужно сделать?"
        value={inputValue}
        onChange={handleChange}
      />
      <button
        className="main__submit"
        type="submit"
        onClick={handleClick}
      >OK</button>
    </form>
  );
};



export default TodoInput;
