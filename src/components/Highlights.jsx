import React from 'react';

export default function Highlights() {
  return (
    <section id="about" className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-br from-[#2D1416] via-[#1A0E0F] to-brand-dark text-white border-t border-b border-white/10">
      {/* Blurred Restaurant Feast Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 blur-xl pointer-events-none transform scale-110"
        style={{ backgroundImage: `url('/chinese_feast.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-body text-[11px] sm:text-xs font-black uppercase tracking-widest text-brand-gold">
            Hungry? We Deliver!
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mt-1 mb-3 tracking-tight drop-shadow-md">
            Hot &amp; Fresh <br /> Home Delivery
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-brand-cream/80">
            Enjoy your favorite meals in the comfort of your home or office. We deliver fast across Burdwan.
          </p>
        </div>

        {/* Content Box - Luxury Frosted Glass */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center bg-white/10 backdrop-blur-2xl p-6 sm:p-8 md:p-12 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/15">
          
          {/* Left Side: Creative Delivery Graphic */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[220px] sm:max-w-[280px] aspect-square rounded-2xl bg-black/30 flex items-center justify-center border border-white/15 shadow-inner overflow-hidden">
              
              {/* Steaming Food Box Graphic */}
              <div className="flex flex-col items-center animate-bounce duration-1000">
                {/* Steam paths */}
                <div className="flex gap-1.5 mb-2">
                  <span className="w-1 h-5 sm:h-6 bg-brand-gold rounded-full opacity-60 animate-pulse" />
                  <span className="w-1 h-7 sm:h-8 bg-brand-gold rounded-full opacity-40 animate-pulse delay-75" />
                  <span className="w-1 h-4 sm:h-5 bg-brand-gold rounded-full opacity-60 animate-pulse delay-150" />
                </div>
                {/* Food Box */}
                <div className="w-20 h-16 sm:w-24 sm:h-20 rounded-xl bg-brand-red text-brand-cream flex items-center justify-center font-heading font-black text-2xl sm:text-3xl shadow-md border-b-4 border-brand-red-dark">
                  AFC
                </div>
                {/* Wheels */}
                <div className="flex gap-6 sm:gap-8 -mt-2">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-dark border-4 border-brand-gold animate-spin" />
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-dark border-4 border-brand-gold animate-spin" />
                </div>
                {/* Motion Lines */}
                <div className="flex gap-1 mt-3 sm:mt-4 text-[10px] uppercase font-black tracking-widest text-brand-gold">
                  <span>Fast</span>
                  <span>•</span>
                  <span>Fresh</span>
                </div>
              </div>
              
              {/* Speed Lines */}
              <div className="absolute left-4 top-1/4 w-10 h-0.5 bg-brand-gold/30 rounded-full" />
              <div className="absolute left-8 top-1/3 w-8 h-0.5 bg-brand-gold/30 rounded-full" />
              <div className="absolute left-3 top-2/3 w-12 h-0.5 bg-brand-gold/30 rounded-full" />
            </div>
          </div>

          {/* Right Side: Text & Actions */}
          <div className="lg:col-span-7 flex flex-col gap-5 sm:gap-6 text-center lg:text-left">
            <h3 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-white">
              Order Instantly Online
            </h3>
            <p className="font-body text-xs sm:text-sm md:text-base text-white/80 leading-relaxed">
              Get hot Bengali thalis, crispy fish fry, and Chinese dishes delivered fresh to your door in Burdwan.
            </p>

            {/* Core Delivery Pointers */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 my-1 sm:my-2 text-left bg-white/5 p-4 rounded-xl border border-white/10">
              <div className="flex gap-2.5 items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold flex-shrink-0" />
                <span className="font-body text-xs font-bold text-white">30-40 Mins Delivery</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold flex-shrink-0" />
                <span className="font-body text-xs font-bold text-white">Hot-Sealed Packing</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <span className="w-2.5 h-2.5 rounded-full bg-brand-gold flex-shrink-0" />
                <span className="font-body text-xs font-bold text-white">COD or UPI Available</span>
              </div>
            </div>

            {/* Delivery Platforms Action buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 sm:mt-4 w-full justify-center lg:justify-start">
              {/* Zomato Button */}
              <a 
                href="https://www.zomato.com/bardhaman/aiswani-food-centre-bardhaman-locality/order" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-gray-50 active:scale-95 text-brand-dark border-2 border-red-500/20 hover:border-red-500 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:flex-1"
              >
                <img src="/zomato.svg" alt="Zomato" className="h-6 object-contain" />
              </a>

              {/* Swiggy Button */}
              <a 
                href="https://www.swiggy.com/city/bardhaman/aiswani-food-centre-or-afc-parbirhata-rest1077508" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 rounded-xl bg-white hover:bg-gray-50 active:scale-95 text-brand-dark border-2 border-orange-500/20 hover:border-orange-500 shadow-md hover:shadow-lg transition-all duration-300 w-full sm:flex-1"
              >
                <img src="/swiggy.svg" alt="Swiggy" className="h-6 object-contain" />
              </a>
            </div>

            {/* Local Direct Delivery */}
            <div className="text-center lg:text-left mt-1">
              <span className="font-body text-xs text-white/70">
                Or call us directly for local takeaway: 
                <a href="tel:+918100322400" className="text-brand-gold font-bold hover:underline ml-1">
                  +91 81003 22400
                </a>
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
