import React from 'react';

const GoogleIcon = ({ className = "w-5 h-5" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className}>
    <path fill="#EA4335" d="M12 5.04c1.74 0 3.3.6 4.53 1.78l3.39-3.39C17.85 1.54 15.17 1 12 1 7.35 1 3.37 3.67 1.39 7.56l3.96 3.07C6.3 7.82 8.94 5.04 12 5.04z" />
    <path fill="#4285F4" d="M23.49 12.27c0-.81-.07-1.59-.2-2.36H12v4.51h6.43c-.28 1.44-1.09 2.66-2.31 3.48l3.6 2.79c2.1-1.94 3.37-4.8 3.37-8.42z" />
    <path fill="#FBBC05" d="M5.35 10.63C5.11 11.37 5 12.17 5 13s.11 1.63.35 2.37L1.39 18.3A11.96 11.96 0 010 13c0-1.89.44-3.67 1.22-5.26l4.13 2.89z" />
    <path fill="#34A853" d="M12 23c3.24 0 5.95-1.08 7.93-2.91l-3.6-2.79c-1 .67-2.28 1.07-4.33 1.07-3.06 0-5.7-2.78-6.65-5.59L1.39 15.85C3.37 19.74 7.35 23 12 23z" />
  </svg>
);

export default function Reviews() {
  const reviews = [
    {
      name: 'Ravi R',
      initial: 'R',
      avatarBg: 'bg-red-500',
      rating: 5,
      relativeTime: '2 weeks ago',
      isLocalGuide: true,
      comment: 'Excellent experience. The food is tasty, fresh, and satisfying. Fulfilling lunch at a great price. Highly recommended!',
    },
    {
      name: 'Abhisek N',
      initial: 'A',
      avatarBg: 'bg-purple-600',
      rating: 5,
      relativeTime: '1 month ago',
      isLocalGuide: true,
      comment: 'Delicious food with affordable price. Tastes like home. Breakfast, lunch, and dinner are all in one place.',
    },
    {
      name: 'Debashis B',
      initial: 'D',
      avatarBg: 'bg-blue-600',
      rating: 5,
      relativeTime: '3 months ago',
      isLocalGuide: false,
      comment: 'Food was great. Homely atmosphere and the food tastes exactly like home-cooked meals. Great for daily dining.',
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-20 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <GoogleIcon className="w-5 h-5 sm:w-6 sm:h-6" />
            <span className="font-body text-[11px] sm:text-xs font-black uppercase tracking-widest text-[#4285F4]">
              Google Customer Reviews
            </span>
          </div>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark tracking-tight">
            What Our <br /> Customers Say
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-brand-muted mt-3">
            We are proud to have a top rating in Burdwan. Read reviews from our customers.
          </p>
        </div>

        {/* Google Reviews Aggregated Panel */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-12 sm:mb-16 bg-brand-card p-5 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-brand-sm border border-brand-red/5 max-w-4xl mx-auto">
          {/* Rating Summary */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 text-center sm:text-left">
            <div className="flex flex-col items-center">
              <span className="font-heading font-black text-5xl sm:text-6xl text-brand-dark">4.8</span>
              <div className="flex text-brand-gold text-lg sm:text-xl mt-1">★★★★★</div>
            </div>
            <div className="h-px sm:h-12 w-24 sm:w-px bg-brand-red/10" />
            <div>
              <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                <GoogleIcon className="w-5 h-5" />
                <span className="font-body text-sm font-black text-brand-dark">Google Reviews</span>
              </div>
              <p className="font-body text-xs sm:text-sm text-brand-muted">
                Based on 145 reviews from Google Maps.
              </p>
            </div>
          </div>

          {/* Action Call */}
          <a 
            href="https://www.google.com/maps" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#4285F4] hover:bg-[#357ae8] active:scale-95 text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-lg transition-all duration-300 w-full sm:w-auto"
          >
            <GoogleIcon className="w-4 h-4 fill-current brightness-0 invert" />
            <span>Write a Google Review</span>
          </a>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={index} 
              className="bg-brand-card p-6 sm:p-7 rounded-2xl shadow-brand-sm border border-brand-red/5 hover:shadow-brand-md transition-all duration-300 relative flex flex-col justify-between"
            >
              
              {/* Review Header (User Profile) */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex gap-3 items-center">
                  {/* Circular Avatar */}
                  <div className={`w-10 h-10 rounded-full ${review.avatarBg} text-white flex items-center justify-center font-body font-bold text-sm shadow-sm flex-shrink-0`}>
                    {review.initial}
                  </div>
                  <div>
                    <h4 className="font-body font-extrabold text-sm text-brand-dark leading-snug">
                      {review.name}
                    </h4>
                    <p className="text-[10px] text-brand-muted font-semibold leading-none mt-0.5">
                      {review.isLocalGuide ? 'Local Guide' : 'Google User'} • {review.relativeTime}
                    </p>
                  </div>
                </div>
                {/* Small G Logo Badge */}
                <GoogleIcon className="w-4 h-4 opacity-75 flex-shrink-0" />
              </div>

              {/* Stars & Text */}
              <div className="flex-grow">
                <div className="flex text-brand-gold text-sm mb-3">
                  {Array.from({ length: review.rating }).map((_, idx) => (
                    <span key={idx}>★</span>
                  ))}
                </div>
                <p className="font-body text-xs sm:text-sm text-brand-muted leading-relaxed line-clamp-6">
                  {review.comment}
                </p>
              </div>

              {/* Verified Footer */}
              <div className="border-t border-brand-red/5 pt-4 mt-6 flex justify-between items-center text-[10px] text-brand-muted font-bold">
                <div className="flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 text-[#34A853] fill-current" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                  <span>Verified Review</span>
                </div>
                <span className="uppercase tracking-wider text-[9px] text-[#4285F4]">
                  on Google Maps
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
