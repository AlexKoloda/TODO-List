import "./App.css";
import Header from "./components/Header/Header";
import FooterDescription from "./components/FooterDescription/FooterDescription";
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import InputTodo from "./components/InputTodo/InputTodo";

function App() {
  return (
    <div className="main__container">
      <Header />
      <InputTodo />
      <ToggleButton />
      <List />
      <Footer />
      <FooterDescription />
    </div>
  );
}

export default App;
