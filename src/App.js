import "./App.css";
import Home from "./views/Home/Home";
import Proyects from "./views/Proyects/Proyects";
import Contact from "./views/Contact/Contact";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Nav />
        <Home />
        <Proyects />
        <Contact />

        <Footer />
      </div>
    </div>
  );
}

export default App;
