import TodoCount from "./TodoCount";
const buttons = [{text: "Все", type: 'all'}, {text:"Активные", type: 'active'}, {text: "Завершенные", type: 'completed'}];

const Footer = ({ tasks, onDeleteAll, onFilterTask}) => {

  return (
    <nav className="footer__nav">
      <TodoCount tasks={tasks} />
      <ul className="footer__list">
        {buttons.map(( button ) => {
          return (
            <li key={button.type}>
              <button 
              className="footer__button"
              onClick={() =>  onFilterTask(button.type)}
              >{button.text}</button>
            </li>
          );
        })}
        <li>
          <button className="main__submit" onClick={() => onDeleteAll()}>
            x
          </button>
        </li>
      </ul>
    </nav>
    
  );
};

export default Footer;



// const App2 = () => {
//   const multiplier = 3;
//   const value = 13;
//   let state = 1;

//   const calculate = (v) => {
//     state =  v * multiplier;
//   }

//   TodoList2({
//     doCalculatins: calculate,
//     value,
//   })
  
// }

// const TodoList2 = (props) => {

//   const innerVar = 123;

//   const doCalcs = () => {
//     props.doCalculatins(props.value + innerVar);
//   }

//   return TodoItem2({doCalculatins: doCalcs});
// }

// const TodoItem2 = (props) => {
//   return props.doCalculatins()
// }