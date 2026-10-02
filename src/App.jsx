import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Footer from './components/Footer';
import FloatingContactButton from './components/FloatingContactButton';
import ContactModal from './components/ContactModal';
import About from './components/About';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-on-background font-body-md text-body-md antialiased selection:bg-primary selection:text-on-primary">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      <main className="w-full max-w-container-max mx-auto px-gutter pt-24 md:pt-28">
        <Hero />
        <Skills />
        <Projects />
        <Achievements />
        <About/>
      </main>

      <Footer />

      <FloatingContactButton onClick={() => setIsContactOpen(true)} />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
