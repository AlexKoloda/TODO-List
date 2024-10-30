import { useState } from "react";
import { useEffect } from 'react';
 
 const TodoCount = (props) => {
  const [countNumber, setCountNumber] = useState(0)
  const [countText, setCountText] = useState('задач')
  
  useEffect(() => {
    !props.tasks.length ? setCountNumber(0) : setCountNumber(props.tasks.length);
    
    switch (true) {
      case props.tasks.length === 1: 
      setCountText('задача');
      break;

      case props.tasks.length <= 4:
      setCountText('задачи')
      break;

      default:
      setCountText('задач')  
    }
 }, [props.tasks.length])
    return (
      <span 
      className="footer__text"
      >
      {countNumber} {countText}
      </span> 
    )
}  

export default TodoCount;