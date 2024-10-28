import MainInput from "./Input";
import TodoList from "./List";
import Footer from "./FooterNav";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Список задач</h1>
    </header>
  );
}

function Main() {
  return (
    <section className="main">
      <MainInput />
      <TodoList />
    </section>
  );
}

export default function Todo() {
  return (
    <>
      <Header />
      <div className="main__container">
        <Main />
        <Footer />
      </div>
    </>
  );
}
