import "./App.css";
import Header from "./components/Header/Header";
import FooterDescription from "./components/FooterDescription/FooterDescription";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import List from "./components/List/List";
import ToggleButton from "./components/ToggleButton/ToggleButton";

function App() {
  return (
    <div className="main__container">
      <Header />
      <Form />
      <ToggleButton />
      <List />
      <Footer />
      <FooterDescription />
    </div>
  );
}

export default App;
