import React from 'react';

export default function Contact() {
  const days = [
    { name: 'Sunday', hours: '9:30 AM - 10:30 PM' },
    { name: 'Monday', hours: '9:30 AM - 10:30 PM' },
    { name: 'Tuesday', hours: '9:30 AM - 10:30 PM' },
    { name: 'Wednesday', hours: '9:30 AM - 10:30 PM' },
    { name: 'Thursday', hours: '9:30 AM - 10:30 PM' },
    { name: 'Friday', hours: '9:30 AM - 10:30 PM' },
    { name: 'Saturday', hours: '9:30 AM - 10:30 PM' },
  ];

  return (
    <section id="contact" className="relative py-16 sm:py-24 overflow-hidden bg-gradient-to-b from-[#14100E] via-[#201012] to-brand-dark text-white border-t border-white/10">
      {/* Blurred Restaurant Front / Dining Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 blur-2xl pointer-events-none transform scale-110"
        style={{ backgroundImage: `url('/2025-12-30 (8).jpg')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-body text-[11px] sm:text-xs font-black uppercase tracking-widest text-brand-gold">
            Reach Out to Us
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mt-1 mb-3 tracking-tight drop-shadow-md">
            Where to Find Us
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-brand-cream/80">
            Our restaurant is located in Perbirhata, Burdwan. Call us or visit today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Contact details and Hours */}
          <div className="lg:col-span-6 flex flex-col gap-8 sm:gap-10 bg-white/10 backdrop-blur-2xl p-6 sm:p-8 rounded-3xl border border-white/15 shadow-2xl">
            
            {/* Phone */}
            <div className="flex gap-4 sm:gap-5 items-start">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 fill-current" viewBox="0 0 24 24">
                  <path d="M21.384 17.791l-3.75-3.208c-.337-.288-.832-.288-1.17 0l-1.19 1.021c-.266.228-.654.228-.921 0-1.631-1.399-2.916-2.5-4.547-3.9l1.19-1.021c.338-.289.338-.796 0-1.085L7.246 6.39c-.338-.289-.833-.289-1.17 0L4.547 7.749c-.684.586-.889 1.503-.497 2.296 2.012 4.07 5.568 7.11 11.233 11.966.388.332.893.52 1.405.52.548 0 1.09-.214 1.49-.556l1.706-1.464c.338-.289.338-.797 0-1.085l-1.0-2.639z" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-base sm:text-lg text-white mb-1">Phone Number</h3>
                <a href="tel:+918100322400" className="text-brand-gold hover:underline text-base sm:text-lg font-extrabold block">
                  +91 81003 22400
                </a>
                <p className="text-xs text-white/80 mt-1">Call us for table bookings or home delivery.</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex gap-4 sm:gap-5 items-start">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-base sm:text-lg text-white mb-1">Address</h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  <strong className="text-white">434, Grand Trunk Road</strong><br />
                  Sripally, Perbirhata, Burdwan<br />
                  West Bengal 713103, India
                </p>
              </div>
            </div>

            {/* Timing */}
            <div className="flex gap-4 sm:gap-5 items-start">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-brand-gold/15 text-brand-gold flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="w-full">
                <h3 className="font-body font-bold text-base sm:text-lg text-white mb-2">Opening Hours</h3>
                <div className="flex flex-col gap-1.5 sm:gap-2 max-w-sm">
                  {days.map((day) => (
                    <div key={day.name} className="flex justify-between border-b border-white/10 pb-1 text-xs sm:text-sm font-semibold">
                      <span className="text-white">{day.name}</span>
                      <span className="text-white/70">{day.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Map Embed */}
          <div className="lg:col-span-6 w-full">
            <div className="h-[280px] sm:h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
              <iframe
                title="Aiswani Food Centre Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.833535973347!2d87.87242137604677!3d23.23094897902808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f849da315b61af%3A0xc31943efc8b1f57f!2sAiswani%20Food%20Centre!5e0!3m2!1sen!2sin!4v1717800000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                className="border-0"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
