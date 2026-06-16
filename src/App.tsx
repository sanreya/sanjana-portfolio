import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LearningInterests from './components/LearningInterests';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <LearningInterests />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
