import Home from "./Components/Home";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
        <Navbar />

        <Home />

        <Skills />

        <Projects />

        <Experience />

        <Contact />
    </div>
  );
}

export default App;
