import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Founders from './components/Founders';
import Highlights from './components/Highlights';
import Menu from './components/Menu';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-brand-cream text-brand-dark selection:bg-brand-gold selection:text-brand-dark overflow-x-hidden">
      {/* Sticky Header Nav */}
      <Header />

      {/* Main Page Content */}
      <main>
        {/* Hero Banner Section */}
        <Hero />

        {/* Founders Section */}
        <Founders />

        {/* Signature Dishes Menu Section */}
        <Menu />

        {/* Interactive Image Gallery Section */}
        <Gallery />

        {/* Why AFC is the Better Choice Section */}
        <Highlights />

        {/* Customer Testimonials Section */}
        <Reviews />

        {/* Direct Contact & Map Section */}
        <Contact />
      </main>

      {/* Footer Navigation */}
      <Footer />
    </div>
  );
}

export default App;
