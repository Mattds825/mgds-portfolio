import React, { useEffect } from 'react';
import Header from './components/header';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bulma/css/bulma.min.css';
import './App.scss';

function App() {

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const windowHeight =  window.innerHeight;
      const scrollPercent = scrollTop / windowHeight;

      const startColor = [0, 0, 0]; // Dark Gray
      const endColor = [255, 255, 255]; // White

      const newColor = startColor.map((start, i) => {
        return Math.round(start + (endColor[i] - start) * scrollPercent);
      });

      document.body.style.backgroundColor = `rgb(${newColor.join(',')})`;
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
