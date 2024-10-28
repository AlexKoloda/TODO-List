

export default function Footer(){
    return (
        <nav className="footer__nav">
            <span className="footer__text">Счетчик</span>
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
    )
}