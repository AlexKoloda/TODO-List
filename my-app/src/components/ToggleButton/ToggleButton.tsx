import { useSelector } from "react-redux";
import { todosListSelector } from "../../store/selectors";
import { useAppDispatch } from "../../hook";
import { completeAll } from '../../store/todo/todoThunks';
import { ToggleButtonStyled } from './ToggleButton.style';

const ToggleButton: React.FC = () => {
  const todos = useSelector(todosListSelector);
  const dispacth = useAppDispatch();

  const handleClick = () => {
    dispacth(completeAll());
  };

  return (
    <ToggleButtonStyled 
    visible = {Number(todos.length)}
    >
     <button 
      type = "button"
      onClick={handleClick}
      className='toggle_button'
    >
      ✓
      </button>
    </ToggleButtonStyled>
  );
};

export default ToggleButton;
