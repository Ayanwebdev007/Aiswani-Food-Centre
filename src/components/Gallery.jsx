import React, { useState, useEffect } from 'react';

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(null);

  // List of real restaurant and seating images uploaded by the user
  const galleryImages = [
    { id: 1, src: '/2025-12-30.jpg', alt: 'Aiswani Food Centre Seating View' },
    { id: 2, src: '/2025-12-30 (1).jpg', alt: 'Aiswani Food Centre Sitting Table' },
    { id: 3, src: '/2025-12-30 (2).jpg', alt: 'Aiswani Food Centre Inside View' },
    { id: 4, src: '/2025-12-30 (3).jpg', alt: 'Aiswani Food Centre Counter View' },
    { id: 5, src: '/2025-12-30 (4).jpg', alt: 'Aiswani Food Centre Main Seating' },
    { id: 6, src: '/2025-12-30 (5).jpg', alt: 'Aiswani Food Centre Dining Space' },
    { id: 7, src: '/2025-12-30 (6).jpg', alt: 'Aiswani Food Centre Indoor Area' },
    { id: 8, src: '/2025-12-30 (7).jpg', alt: 'Aiswani Food Centre Tables and Chairs' },
    { id: 9, src: '/2025-12-30 (8).jpg', alt: 'Aiswani Food Centre Restaurant Front' }
  ];

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="py-16 sm:py-24 bg-brand-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <span className="font-body text-[11px] sm:text-xs font-black uppercase tracking-widest text-brand-red">
            Inside Our Restaurant
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-brand-dark mt-1 mb-3 tracking-tight">
            Our <br /> Restaurant Photos
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-brand-muted">
            Take a look at our clean dining area, tables, and restaurant front in Burdwan.
          </p>
        </div>

        {/* Gallery Grid - 2 Column on Phone screens to cut scroll height in half! */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              onClick={() => setActiveImage(image)}
              className="group relative h-40 sm:h-72 rounded-xl sm:rounded-2xl overflow-hidden shadow-brand-sm border border-brand-red/5 cursor-pointer bg-brand-cream active:scale-98 transition-all"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              
              {/* Overlay with Zoom Icon */}
              <div className="absolute inset-0 bg-brand-dark/30 sm:bg-brand-dark/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-brand-cream/90 flex items-center justify-center text-brand-red shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal - Touch optimized close button */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-[1000] bg-brand-dark/95 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setActiveImage(null)}
        >
          {/* Close button - Large thumb-friendly touch target */}
          <button 
            onClick={() => setActiveImage(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-brand-cream/15 hover:bg-brand-red text-brand-cream flex items-center justify-center text-3xl font-light focus:outline-none transition-colors active:scale-90"
            aria-label="Close Gallery"
          >
            &times;
          </button>

          {/* Modal content box */}
          <div 
            className="relative max-w-4xl w-full bg-transparent rounded-2xl overflow-hidden shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={activeImage.src}
              alt={activeImage.alt}
              className="w-full h-auto max-h-[85vh] object-contain mx-auto rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
