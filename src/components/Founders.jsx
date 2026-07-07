import React from 'react';

export default function Founders() {
  return (
    <section id="founders" className="py-16 sm:py-24 bg-white border-b border-brand-red/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 sm:gap-16 items-center">
          
          {/* Left Side: Founders Photo Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative group w-full max-w-[340px] sm:max-w-[400px]">
              {/* Back Gold decorative offset card */}
              <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-brand-gold/40 to-brand-red/10 blur-md group-hover:scale-[1.02] transition-transform duration-500" />
              
              {/* Frame Container */}
              <div className="relative bg-white p-3 rounded-2xl shadow-brand-lg border border-brand-red/10 overflow-hidden">
                <img 
                  src="/485931118_122132785940600604_3358202163027502736_n.jpg" 
                  alt="Founders of Aiswani Food Centre" 
                  className="w-full h-auto object-cover rounded-xl group-hover:scale-102 transition-transform duration-500"
                />

              </div>
            </div>
          </div>

          {/* Right Side: Founder's Story & Quote */}
          <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 text-center lg:text-left">
            <div>
              <span className="font-body text-[11px] sm:text-xs font-black uppercase tracking-widest text-brand-red">
                Our Story &amp; Legacy
              </span>
              <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark mt-1 tracking-tight">
                Meet the Founders
              </h2>
            </div>



            {/* Quote Block */}
            <div className="relative pl-0 lg:pl-6 border-l-0 lg:border-l-4 border-brand-gold py-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-brand-gold/30 absolute -top-4 left-0 hidden lg:block" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.988zm-12 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.154c-2.433.914-3.996 3.638-3.996 5.846h3.999v10h-9.999z"/>
              </svg>
              <p className="font-heading italic text-base sm:text-lg md:text-xl text-brand-dark leading-relaxed font-bold">
                "Our mission is simple: to feed Burdwan with the same love, freshness, and authentic local flavor that we serve at our own family table."
              </p>
            </div>


          </div>

        </div>
      </div>
    </section>
  );
}
