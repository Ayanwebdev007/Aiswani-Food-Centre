import React, { useState, useEffect } from 'react';

export default function Hero() {
  const slideImages = [
    '/2025-12-30.jpg',
    '/2025-12-30 (1).jpg',
    '/2025-12-30 (2).jpg',
    '/2025-12-30 (3).jpg',
    '/2025-12-30 (4).jpg',
    '/2025-12-30 (5).jpg',
    '/2025-12-30 (6).jpg',
    '/2025-12-30 (7).jpg',
    '/2025-12-30 (8).jpg'
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNext();
    }, 4500);
    return () => clearInterval(slideInterval);
  }, []);

  const handleNext = () => {
    setActiveSlide((prev) => (prev + 1) % slideImages.length);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev - 1 + slideImages.length) % slideImages.length);
  };

  return (
    <section id="home" className="relative min-h-[85vh] lg:min-h-screen flex items-center justify-center overflow-hidden animate-fade-in bg-brand-dark">
      
      {/* Background Image Slider */}
      <div className="absolute inset-0 w-full h-full z-0">
        {slideImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Aiswani Food Centre View ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1200ms] ease-in-out transform ${
              index === activeSlide 
                ? 'opacity-60 scale-100' 
                : 'opacity-0 scale-105'
            }`}
          />
        ))}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/85 via-brand-dark/55 to-brand-dark/95 z-0 pointer-events-none" />
      </div>

      {/* Hero Content Layer (stacked on top) */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20 flex flex-col items-center text-center gap-6 sm:gap-8">
        
        {/* Hero Top Badges: Google Reviews & Home Delivery Available */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 max-w-2xl mx-auto">
          
          {/* Google Reviews Badge */}
          <a 
            href="#reviews" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 hover:bg-white text-brand-dark text-xs sm:text-sm font-extrabold shadow-lg hover:scale-105 transition-all duration-300"
          >
            {/* Google G Logo SVG */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0">
              <path fill="#EA4335" d="M12 5.04c1.74 0 3.3.6 4.53 1.78l3.39-3.39C17.85 1.54 15.17 1 12 1 7.35 1 3.37 3.67 1.39 7.56l3.96 3.07C6.3 7.82 8.94 5.04 12 5.04z" />
              <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.43c-.28 1.44-1.09 2.66-2.31 3.48l3.6 2.79c2.1-1.94 3.37-4.8 3.37-8.42z" />
              <path fill="#FBBC05" d="M5.35 10.63C5.11 11.37 5 12.17 5 13s.11 1.63.35 2.37L1.39 18.3A11.96 11.96 0 010 13c0-1.89.44-3.67 1.22-5.26l4.13 2.89z" />
              <path fill="#34A853" d="M12 23c3.24 0 5.95-1.08 7.93-2.91l-3.6-2.79c-1 .67-2.28 1.07-4.33 1.07-3.06 0-5.7-2.78-6.65-5.59L1.39 15.85C3.37 19.74 7.35 23 12 23z" />
            </svg>
            <span className="text-brand-dark font-black">4.8 ★★★★★</span>
            <span className="text-gray-600 font-bold">(145+ Google Reviews)</span>
          </a>

          {/* Home Delivery Available Badge */}
          <a 
            href="#about" 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-red border border-brand-gold text-brand-cream text-xs sm:text-sm font-extrabold shadow-lg hover:scale-105 transition-all duration-300 backdrop-blur-md"
          >
            {/* Delivery Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 text-brand-gold animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="text-brand-cream font-black">Home Delivery Available</span>
            <span className="text-brand-gold font-bold">• 30 Mins</span>
          </a>

        </div>

        {/* Heading - Fluid scaling for mobile */}
        <h2 className="font-heading font-black text-3xl sm:text-6xl md:text-7xl text-brand-cream leading-tight tracking-tight drop-shadow-md">
          Taste the Real <span className="text-brand-gold">Flavors of Bengal</span>
        </h2>

        {/* Tagline */}
        <p className="font-body text-sm sm:text-xl text-brand-cream/90 max-w-2xl leading-relaxed drop-shadow-sm px-2">
          We serve fresh, home-style Bengali thalis, crispy fish fry, Chinese dishes, and North Indian food in Burdwan.
        </p>

        {/* Action Buttons - Sleek compact pills that never wrap on mobile */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-auto mt-2 sm:mt-4 px-2">
          <a 
            href="tel:+918100322400" 
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-brand-red hover:bg-brand-red-dark text-brand-cream text-xs sm:text-base font-extrabold shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300 whitespace-nowrap w-auto"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 fill-current" viewBox="0 0 24 24">
              <path d="M21.384 17.791l-3.75-3.208c-.337-.288-.832-.288-1.17 0l-1.19 1.021c-.266.228-.654.228-.921 0-1.631-1.399-2.916-2.5-4.547-3.9l1.19-1.021c.338-.289.338-.796 0-1.085L7.246 6.39c-.338-.289-.833-.289-1.17 0L4.547 7.749c-.684.586-.889 1.503-.497 2.296 2.012 4.07 5.568 7.11 11.233 11.966.388.332.893.52 1.405.52.548 0 1.09-.214 1.49-.556l1.706-1.464c.338-.289.338-.797 0-1.085l-1.0-2.639z" />
            </svg>
            <span>Call: 81003 22400</span>
          </a>
          <a 
            href="https://menu.tmbill.com/digimenu/24922" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-full border-2 border-brand-cream text-brand-cream hover:bg-brand-cream hover:text-brand-dark text-xs sm:text-base font-extrabold active:scale-95 transition-all duration-300 backdrop-blur-xs whitespace-nowrap w-auto"
          >
            <span>View Digital Menu</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" viewBox="0 0 24 24">
              <path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-2h14V5H5v14Zm2-2h10q.425 0 .713-.288Q18 16.425 18 16t-.287-.712Q17.425 15 17 15H7q-.425 0-.712.288Q6 15.575 6 16t.288.712Q6.575 17 7 17Zm0-4h10q.425 0 .713-.287Q18 12.425 18 12t-.287-.713Q17.425 11 17 11H7q-.425 0-.712.287Q6 11.575 6 12t.288.713Q6.575 13 7 13Zm0-4h10q.425 0 .713-.288Q18 8.425 18 8t-.287-.712Q17.425 7 17 7H7q-.425 0-.712.288Q6 7.575 6 8t.288.712Q6.575 9 7 9Z"/>
            </svg>
          </a>
        </div>

        {/* Order platforms - Touch friendly mobile layout */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mt-4 sm:mt-6 w-full justify-center">
          <span className="font-body text-[11px] sm:text-xs font-black uppercase tracking-widest text-brand-gold flex items-center gap-1.5">
            <span>⚡ Fast Home Delivery Available On:</span>
          </span>
          <div className="flex gap-3 justify-center">
            <a 
              href="https://www.zomato.com/bardhaman/aiswani-food-centre-bardhaman-locality/order" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center px-4 py-2 rounded-xl bg-brand-card/95 hover:bg-brand-card active:scale-95 shadow-md transition-all duration-300 h-11 w-32 justify-center"
            >
              <img src="/zomato.svg" alt="Zomato" className="h-5 object-contain" />
            </a>
            <a 
              href="https://www.swiggy.com/city/bardhaman/aiswani-food-centre-or-afc-parbirhata-rest1077508" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center px-4 py-2 rounded-xl bg-brand-card/95 hover:bg-brand-card active:scale-95 shadow-md transition-all duration-300 h-11 w-32 justify-center"
            >
              <img src="/swiggy.svg" alt="Swiggy" className="h-5 object-contain" />
            </a>
          </div>
        </div>

      </div>

      {/* Manual Slider Navigation Arrows - Hidden on mobile phones to prevent crowding! */}
      <button 
        onClick={handlePrev} 
        className="hidden sm:flex absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-cream/15 hover:bg-brand-red text-brand-cream items-center justify-center transition-colors focus:outline-none backdrop-blur-xs border border-brand-cream/20 active:scale-90"
        aria-label="Previous Slide"
      >
        &#10094;
      </button>
      <button 
        onClick={handleNext} 
        className="hidden sm:flex absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-brand-cream/15 hover:bg-brand-red text-brand-cream items-center justify-center transition-colors focus:outline-none backdrop-blur-xs border border-brand-cream/20 active:scale-90"
        aria-label="Next Slide"
      >
        &#10095;
      </button>

      {/* Slide Index Indicators (dots) */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-1.5 sm:gap-2">
        {slideImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-300 ${
              index === activeSlide ? 'bg-brand-gold w-5 sm:w-6' : 'bg-brand-cream/40 hover:bg-brand-cream/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}
