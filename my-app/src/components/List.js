const TodoList = ({ tasks }) => {
  
  return (
    <section className="main">
      <ul className="main__list">
        
          {tasks.map((item, index) => (
            
          <li className="main__item" key={index}>
          <div className="main__checkbox"></div>
          {item}
          <button className="main__submit" type="submit">x</button>
          </li>
          ))}

        
      </ul>
    </section>
  );
};

export default TodoList;
