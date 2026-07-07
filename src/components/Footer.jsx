import React from 'react';
import logo from '../assets/logo.jpg';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-brand-light pt-12 sm:pt-16 pb-24 lg:pb-8 border-t border-brand-cream/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-12">
          
          {/* Brand Info Column */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={logo} 
                alt="Aiswani Food Centre Logo" 
                className="w-10 h-10 rounded-full object-cover border border-brand-gold flex-shrink-0"
              />
              <div>
                <h3 className="font-heading font-black text-base md:text-lg text-brand-cream tracking-tight leading-none whitespace-nowrap">
                  AISWANI FOOD CENTRE
                </h3>
              </div>
            </div>
            <p className="font-body text-xs text-brand-cream/70 leading-relaxed mt-1">
              We serve tasty Bengali thalis, Chinese food, and North Indian dishes. Order today and enjoy fresh, home-cooked food!
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="font-body font-bold text-xs sm:text-sm text-brand-cream uppercase tracking-widest relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 sm:grid-cols-1 list-none gap-2 text-xs font-semibold text-brand-cream/70">
              <li><a href="#home" className="hover:text-brand-gold hover:pl-1 transition-all duration-300">Home</a></li>
              <li><a href="#menu" className="hover:text-brand-gold hover:pl-1 transition-all duration-300">Menu</a></li>
              <li><a href="#about" className="hover:text-brand-gold hover:pl-1 transition-all duration-300">About Us</a></li>
              <li><a href="#reviews" className="hover:text-brand-gold hover:pl-1 transition-all duration-300">Reviews</a></li>
              <li><a href="#gallery" className="hover:text-brand-gold hover:pl-1 transition-all duration-300">Photos</a></li>
              <li><a href="#contact" className="hover:text-brand-gold hover:pl-1 transition-all duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details Column */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="font-body font-bold text-xs sm:text-sm text-brand-cream uppercase tracking-widest relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold">
              Contact Info
            </h4>
            <p className="font-body text-xs text-brand-cream/70 leading-relaxed">
              434, Grand Trunk Road<br />
              Sripally, Perbirhata, Burdwan<br />
              West Bengal 713103
            </p>
            <p className="font-body text-xs font-bold text-brand-gold">
              Call: <a href="tel:+918100322400" className="hover:underline">+91 81003 22400</a>
            </p>
          </div>

          {/* Socials & Ordering Apps Column */}
          <div className="flex flex-col gap-3 sm:gap-4">
            <h4 className="font-body font-bold text-xs sm:text-sm text-brand-cream uppercase tracking-widest relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-brand-gold">
              Order Online
            </h4>
            <div className="flex flex-col gap-2.5">
              <a 
                href="https://www.zomato.com/bardhaman/aiswani-food-centre-bardhaman-locality/order" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 rounded-lg bg-brand-cream/90 hover:bg-brand-cream active:scale-95 transition-all duration-300 h-10"
              >
                <img src="/zomato.svg" alt="Zomato" className="h-5 object-contain" />
              </a>
              <a 
                href="https://www.swiggy.com/city/bardhaman/aiswani-food-centre-or-afc-parbirhata-rest1077508" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center p-2 rounded-lg bg-brand-cream/90 hover:bg-brand-cream active:scale-95 transition-all duration-300 h-10"
              >
                <img src="/swiggy.svg" alt="Swiggy" className="h-5 object-contain" />
              </a>
              <a 
                href="https://menu.tmbill.com/digimenu/24922" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-between px-4 py-2 rounded-lg bg-brand-cream/5 hover:bg-brand-cream/10 active:scale-95 border border-brand-cream/10 text-xs font-bold text-brand-cream transition-all duration-300 h-10"
              >
                <span>Digimenu Portal</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="border-t border-brand-cream/10 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4 text-xs text-brand-cream/40 text-center">
          <p>© {currentYear} Aiswani Food Centre. All rights reserved. Created in Burdwan.</p>
          <div className="flex gap-4">
            <a href="https://localo.com/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">Privacy Policy</a>
            <span>•</span>
            <a href="https://localo.com/regulations" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold">Regulations</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
