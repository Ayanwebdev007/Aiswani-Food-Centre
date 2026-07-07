import React, { useState } from 'react';
import thaliImg from '../assets/hero_thali.png';
import fishFryImg from '../assets/fish_fry.png';
import chineseImg from '../assets/chinese_feast.png';
import radhaImg from '../assets/radhaballavi.png';

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('bengali');

  const categories = [
    { id: 'bengali', name: 'Bengali Feast' },
    { id: 'chinese', name: 'Chinese Corner' },
    { id: 'north-indian', name: 'North Indian' },
    { id: 'breakfast-snacks', name: 'Breakfast & Snacks' },
  ];

  const menuItems = [
    // Bengali Feast
    {
      id: 1,
      name: 'Veg Bengali Thali',
      price: '₹120',
      description: 'Rice, yellow Dal, Alu Bhaja, seasonal Veg Curry, Chutney, and Papad.',
      category: 'bengali',
      isVeg: true,
      image: thaliImg,
      popular: false
    },
    {
      id: 2,
      name: 'Egg Bengali Thali',
      price: '₹140',
      description: 'Rice, tasty Egg Curry (2 eggs), Dal, Alu Bhaja, and Chutney.',
      category: 'bengali',
      isVeg: false,
      image: thaliImg,
      popular: false
    },
    {
      id: 3,
      name: 'Chicken Bengali Thali',
      price: '₹180',
      description: 'Rice, Chicken Kosha (3 pieces), yellow Dal, Alu Bhaja, and Chutney.',
      category: 'bengali',
      isVeg: false,
      image: thaliImg,
      popular: true
    },
    {
      id: 4,
      name: 'Special Fish Fry',
      price: '₹90',
      description: 'Crispy fried fish fillet served with spicy Kasundi mustard.',
      category: 'bengali',
      isVeg: false,
      image: fishFryImg,
      popular: true
    },
    // Chinese Corner
    {
      id: 5,
      name: 'Fried Rice & Chilli Chicken Combo',
      price: '₹170',
      description: 'Veg Fried Rice served with spicy Chilli Chicken (4 pieces) in gravy.',
      category: 'chinese',
      isVeg: false,
      image: chineseImg,
      popular: true
    },
    {
      id: 6,
      name: 'Chilli Paneer with Noodles',
      price: '₹160',
      description: 'Hakka Noodles served with sweet and spicy Chilli Paneer gravy.',
      category: 'chinese',
      isVeg: true,
      image: chineseImg,
      popular: false
    },
    {
      id: 7,
      name: 'Veg Hakka Noodles',
      price: '₹100',
      description: 'Stir-fried noodles cooked with fresh spring vegetables.',
      category: 'chinese',
      isVeg: true,
      image: chineseImg,
      popular: false
    },
    // North Indian
    {
      id: 8,
      name: 'Paneer Butter Masala',
      price: '₹140',
      description: 'Fresh paneer cubes cooked in a rich, buttery tomato gravy.',
      category: 'north-indian',
      isVeg: true,
      image: thaliImg,
      popular: true
    },
    {
      id: 9,
      name: 'Roti & Chana Masala',
      price: '₹50',
      description: '3 soft tawa rotis served with spiced chickpea curry.',
      category: 'north-indian',
      isVeg: true,
      image: radhaImg,
      popular: false
    },
    {
      id: 10,
      name: 'Mutton Kosha (4 pieces)',
      price: '₹240',
      description: 'Slow-cooked soft mutton in a rich aromatic spiced gravy.',
      category: 'north-indian',
      isVeg: false,
      image: thaliImg,
      popular: true
    },
    // Breakfast & Snacks
    {
      id: 11,
      name: 'Radhaballavi with Alur Dom',
      price: '₹60',
      description: '4 soft, lentil-filled pooris served with spicy potato curry.',
      category: 'breakfast-snacks',
      isVeg: true,
      image: radhaImg,
      popular: true
    },
    {
      id: 12,
      name: 'Luchi with Cholar Dal',
      price: '₹50',
      description: '4 hot puffed luchis served with sweet-spicy Cholar Dal.',
      category: 'breakfast-snacks',
      isVeg: true,
      image: radhaImg,
      popular: false
    },
    {
      id: 13,
      name: 'Vegetable Singara (2 pieces)',
      price: '₹20',
      description: '2 crispy samosas filled with spiced potatoes and peanuts.',
      category: 'breakfast-snacks',
      isVeg: true,
      image: fishFryImg,
      popular: false
    }
  ];

  const filteredItems = menuItems.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="relative py-16 sm:py-24 overflow-hidden bg-[#161211] text-white border-t border-b border-white/10">
      {/* Blurred Restaurant Dining Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20 blur-2xl pointer-events-none transform scale-110"
        style={{ backgroundImage: `url('${thaliImg}')` }}
      />
      {/* Warm Gold Light Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <span className="font-body text-[11px] sm:text-xs font-black uppercase tracking-widest text-brand-gold">
            Delicious & Fresh
          </span>
          <h2 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-white mt-1 mb-3 tracking-tight drop-shadow-md">
            Our Food Menu
          </h2>
          <p className="font-body text-xs sm:text-sm md:text-base text-brand-cream/80">
            Fresh, hot, and highly rated. Check out our popular dishes and order what you like.
          </p>
        </div>

        {/* Categories Tab Selector */}
        <div className="flex justify-center flex-wrap gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold border transition-all duration-300 active:scale-95 ${
                activeCategory === category.id
                  ? 'bg-gradient-to-r from-brand-red to-red-600 text-white border-brand-red shadow-lg shadow-red-500/30 scale-105'
                  : 'bg-white/10 text-white/80 border-white/15 hover:bg-white/20'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid - Premium White Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden shadow-2xl border border-white/10 hover:border-brand-gold/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Image & Veg Badge */}
              <div className="relative h-44 sm:h-48 overflow-hidden bg-brand-red/5">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                
                {/* Veg/Non-veg badge */}
                <span className={`absolute top-3 right-3 px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider text-white shadow-sm ${
                  item.isVeg ? 'bg-brand-veg' : 'bg-brand-nonveg'
                }`}>
                  {item.isVeg ? 'Veg' : 'Non-Veg'}
                </span>

                {item.popular && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider bg-brand-gold text-brand-dark shadow-sm">
                    ★ Popular
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-3 mb-2">
                  <h3 className="font-body font-bold text-base sm:text-lg text-brand-dark">
                    {item.name}
                  </h3>
                  <span className="font-heading font-extrabold text-lg sm:text-xl text-brand-red whitespace-nowrap">
                    {item.price}
                  </span>
                </div>
                <p className="font-body text-xs sm:text-sm text-gray-600 leading-relaxed mb-6 flex-grow">
                  {item.description}
                </p>
                
                {/* Card Footer */}
                <div className="border-t border-brand-red/5 pt-4 mt-auto flex justify-between items-center">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span className="text-[10px] sm:text-[11px] font-bold text-gray-500 uppercase tracking-wider">
                      {activeCategory === 'bengali' ? 'Bengali Style' : activeCategory === 'chinese' ? 'Chinese Style' : 'North Indian'}
                    </span>
                  </div>
                  <a 
                    href={`https://wa.me/918100322400?text=${encodeURIComponent(`Hello! I would like to order: *${item.name}* (${item.price}) from Aiswani Food Centre.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3.5 py-1.5 rounded-lg bg-brand-red text-white hover:bg-red-600 active:scale-95 text-xs font-bold transition-all flex items-center gap-1 shadow-md shadow-red-500/20"
                  >
                    <span>Order Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 fill-current" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
