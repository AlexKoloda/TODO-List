function Header() {
    return (
      <header className="header">
        <h1 className="header__title">Список задач</h1>
      </header>
    );
  }


export default function Input() {
    return (
        <>
        <Header />
        <form>
            <input className="main__input"  type='text' placeholder="Что нужно сделать?"></input>
            <input className="main__submit" type="submit" value="ОК" ></input>
        </form>
        </>
    )
}