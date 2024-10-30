import TodoCount from "./TodoCount";

const Footer = (props) => {

  return (
    <nav className="footer__nav">
    <TodoCount tasks = {props.tasks}/>
      <ul className="footer__list">
        <li>
          <button className="footer__button">Все</button>
        </li>
        <li>
          <button className="footer__button">Активные</button>
        </li>
        <li>
          <button className="footer__button">Завершенные</button>
        </li>
        <li>
          <input className="main__submit" type="submit" value="x"></input>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
