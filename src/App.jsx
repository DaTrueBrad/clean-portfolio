import './App.css';
import Header from './components/Header';
import Intro from './components/Intro';
import About from './components/About';
import Projects from './components/Projects';
import ErrorBoundary from './components/ErrorBoundary';
import Contact from './components/Contact';

function App() {
  
  return (
    <div className="App">
      <Header />
      <Intro />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
