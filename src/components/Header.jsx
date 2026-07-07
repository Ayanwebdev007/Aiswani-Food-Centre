import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Menu', href: '#menu' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-cream/95 backdrop-blur-md shadow-brand-sm border-b border-brand-red/10 py-2.5 sm:py-3' 
          : 'bg-brand-cream py-3.5 sm:py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo and brand name - Optimized for all mobile screen widths */}
          <a href="#home" className="flex items-center gap-2 sm:gap-3 group">
            <img 
              src={logo} 
              alt="Aiswani Food Centre Logo" 
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-brand-gold group-hover:scale-105 transition-transform duration-300 flex-shrink-0"
            />
            <div>
              <h1 className="font-heading font-black text-[15px] sm:text-lg md:text-xl text-brand-red tracking-tight leading-none whitespace-nowrap">
                AISWANI FOOD CENTRE
              </h1>
            </div>
          </a>

          {/* Desktop nav menu */}
          <nav className="hidden lg:flex items-center gap-8">
            <ul className="flex list-none gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="font-body text-sm font-semibold text-brand-dark hover:text-brand-red relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:height-[2px] after:bg-brand-gold hover:after:w-full after:transition-all after:duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Call CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="tel:+918100322400" 
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-brand-red hover:bg-brand-red-dark text-brand-cream text-sm font-bold shadow-brand-sm hover:shadow-brand-md transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M21.384 17.791l-3.75-3.208c-.337-.288-.832-.288-1.17 0l-1.19 1.021c-.266.228-.654.228-.921 0-1.631-1.399-2.916-2.5-4.547-3.9l1.19-1.021c.338-.289.338-.796 0-1.085L7.246 6.39c-.338-.289-.833-.289-1.17 0L4.547 7.749c-.684.586-.889 1.503-.497 2.296 2.012 4.07 5.568 7.11 11.233 11.966.388.332.893.52 1.405.52.548 0 1.09-.214 1.49-.556l1.706-1.464c.338-.289.338-.797 0-1.085l-1.0-2.639z" />
              </svg>
              <span>Call us! +91 81003 22400</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="flex lg:hidden flex-col gap-1.5 focus:outline-none p-2 rounded-lg hover:bg-brand-red/5 active:scale-95 transition-all"
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 bg-brand-red rounded-full transition-transform duration-300 ${isOpen ? 'transform translate-y-2 rotate-45' : ''}`} />
            <span className={`w-6 h-0.5 bg-brand-red rounded-full transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`w-6 h-0.5 bg-brand-red rounded-full transition-transform duration-300 ${isOpen ? 'transform -translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {/* Mobile nav drawer */}
        <div className={`lg:hidden fixed top-[60px] sm:top-[70px] inset-x-0 bg-brand-cream/98 backdrop-blur-lg border-b border-brand-red/10 shadow-brand-md p-6 flex flex-col gap-5 transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'
        }`}>
          <ul className="flex flex-col list-none gap-3.5">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="block font-body text-base font-bold text-brand-dark hover:text-brand-red py-1.5 border-b border-brand-red/5"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a 
            href="tel:+918100322400" 
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 w-full py-3.5 rounded-xl bg-brand-red hover:bg-brand-red-dark text-brand-cream text-base font-bold shadow-brand-sm active:scale-98 transition-all duration-300 whitespace-nowrap"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M21.384 17.791l-3.75-3.208c-.337-.288-.832-.288-1.17 0l-1.19 1.021c-.266.228-.654.228-.921 0-1.631-1.399-2.916-2.5-4.547-3.9l1.19-1.021c.338-.289-.833-.289-1.17 0L4.547 7.749c-.684.586-.889 1.503-.497 2.296 2.012 4.07 5.568 7.11 11.233 11.966.388.332.893.52 1.405.52.548 0 1.09-.214 1.49-.556l1.706-1.464c.338-.289.338-.797 0-1.085l-1.0-2.639z" />
            </svg>
            <span>Call Now: 81003 22400</span>
          </a>
        </div>
      </header>

      {/* Crazy Level Mobile Responsive: iOS 18 / Android 15 Native App Tab Bar */}
      <div className="lg:hidden fixed bottom-3 inset-x-3 z-50 bg-[#141414]/95 backdrop-blur-2xl border border-white/15 py-2 px-3 flex items-center justify-around shadow-[0_20px_50px_rgba(0,0,0,0.9)] rounded-full max-w-[360px] mx-auto">
        
        {/* Call */}
        <a 
          href="tel:+918100322400" 
          className="flex flex-col items-center justify-center gap-1 group w-1/5 py-0.5 active:scale-95 transition-transform"
          aria-label="Call Us"
        >
          <div className="h-6 flex items-center justify-center text-rose-500 group-hover:scale-110 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
          </div>
          <span className="text-[10px] font-medium leading-none tracking-tight text-white/70 group-hover:text-white transition-colors">Call</span>
        </a>

        {/* WhatsApp */}
        <a 
          href="https://wa.me/918100322400" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 group w-1/5 py-0.5 active:scale-95 transition-transform"
          aria-label="WhatsApp Us"
        >
          <div className="h-6 flex items-center justify-center text-[#25D366] group-hover:scale-110 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
          </div>
          <span className="text-[10px] font-medium leading-none tracking-tight text-white/70 group-hover:text-white transition-colors">Chat</span>
        </a>

        {/* Menu */}
        <a 
          href="#menu" 
          className="flex flex-col items-center justify-center gap-1 group w-1/5 py-0.5 active:scale-95 transition-transform"
          aria-label="View Menu"
        >
          <div className="h-6 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/>
            </svg>
          </div>
          <span className="text-[10px] font-medium leading-none tracking-tight text-white/70 group-hover:text-white transition-colors">Menu</span>
        </a>

        {/* Zomato */}
        <a 
          href="https://www.zomato.com/bardhaman/aiswani-food-centre-bardhaman-locality/order" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 group w-1/5 py-0.5 active:scale-95 transition-transform"
          aria-label="Order on Zomato"
        >
          <div className="h-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <img src="/zomato.svg" alt="Zomato" className="h-3.5 w-auto max-w-[48px] object-contain brightness-125" />
          </div>
          <span className="text-[10px] font-medium leading-none tracking-tight text-white/70 group-hover:text-white transition-colors">Zomato</span>
        </a>

        {/* Swiggy */}
        <a 
          href="https://www.swiggy.com/city/bardhaman/aiswani-food-centre-or-afc-parbirhata-rest1077508" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 group w-1/5 py-0.5 active:scale-95 transition-transform"
          aria-label="Order on Swiggy"
        >
          <div className="h-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
            <img src="/swiggy.svg" alt="Swiggy" className="h-5 w-auto object-contain" />
          </div>
          <span className="text-[10px] font-medium leading-none tracking-tight text-white/70 group-hover:text-white transition-colors">Swiggy</span>
        </a>

      </div>
    </>
  );
}
