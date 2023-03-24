import logo from './logo.svg';
import './App.css';
import Home from  "./views/Home/Home"
import Proyects from "./views/Proyects/Proyects"
import Contact from "./views/Contact/Contact"
import Nav from './components/Nav/Nav';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Home/>
        <Proyects/>
        <Contact/>
        <Footer/>
      </header>
    </div>
  );
}

export default App;
