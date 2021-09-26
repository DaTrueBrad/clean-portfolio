import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Projects />
    </div>
  );
}

export default App;
