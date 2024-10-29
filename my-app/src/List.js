function TodoList() {
  return (
    <ul className="main__list">
      <li className="main__item">
        <div className="main__checkbox"></div>
        <span> Текст задачи </span>
        <input className="main__submit" type="submit" value="x"></input>
      </li>

      <li className="main__item main__item--completed">
        <div className="main__checkbox"></div>
        <span> Текст задачи </span>
        <input className="main__submit" type="submit" value="x"></input>
      </li>
    </ul>
  );
}


function Main() {
  return (
    <section className="main">
      <TodoList />
    </section>
  );
}

export default function List() {

return (
  <Main />
)

}
