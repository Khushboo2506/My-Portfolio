import "./App.scss";
import Intro from "./components/intro/Intro";
import Projects from "./components/projects/Projects";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact";
import Portfolio from "./components/portfolio/Portfolio";
import Menu from "./components/menu/Menu";
import {useState} from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Projects/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
