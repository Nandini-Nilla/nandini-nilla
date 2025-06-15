import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Hero from './components/Sections/Hero';
import About from './components/Sections/About';
import Skills from './components/Sections/Skills';
import Projects from './components/Sections/Projects';
import Certifications from './components/Sections/Certifications';
import Contact from './components/Sections/Contact';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <div className="flex flex-col min-h-screen w-full max-w-[100vw]">
        <Header />
        <main className="flex-1 w-full max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full">
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Certifications />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;