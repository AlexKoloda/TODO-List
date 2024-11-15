import "./App.css";
import Header from "./components/Header/Header";
import FooterDescription from "./components/FooterDescription/FooterDescription";
import Footer from "./components/Footer/Footer";
import List from "./components/List/List";
import ToggleButton from "./components/ToggleButton/ToggleButton";
import TodoForm from "./components/TodoForm/TodoForm";


function App() {
  return (
    <div className="main__container">
      <Header />
      <TodoForm/>
      <ToggleButton />
      <List />
      <Footer />
      <FooterDescription />
    </div>
  );
}

export default App;
