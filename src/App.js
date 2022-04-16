import logo from './logo.svg';
import './App.css';
import Home from './components/main/home/home';
import Experience from './components/main/experience/experience';
import Projects from './components/main/projects/projects';
import Skills from './components/main/skills/skills';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  //bg-stone-900


  return (
    <main className="dark:text-gray-400  dark:bg-gray-900 body-font">
      <Header />
      <div>
        <Home />
        <Experience />
        <Skills />
        <Projects />
      </div>
      <Footer />
    </main>
  );
}

export default App;
