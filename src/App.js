import logo from './logo.svg';
import './App.css';
import Home from './components/main/home/home';
import Experience from './components/main/experience/experience';
import Projects from './components/main/projects/projects';
import Skills from './components/main/skills/skills';
import Header from './components/header/header';
import Footer from './components/footer/footer';

function App() {
  return (
    <main className="text-gray-400 bg-stone-900 body-font">
      <Header />
      <Home />
      {/* <div class="relative flex py-5 items-center">
    <div class="flex-grow border-t border-gray-400"></div>
    <span class="flex-shrink mx-4 text-gray-400">Content</span>
    <div class="flex-grow border-t border-gray-400"></div>
</div> */}
      <Experience />
      <Skills />
      <Projects />
      <Footer />
    </main>
  );
}

export default App;
