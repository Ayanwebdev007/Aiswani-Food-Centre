/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#8c1d27',      /* Deep Red (Bengali heritage/chili red) */
          'red-dark': '#70141c',
          gold: '#d49a3b',     /* Warm Mustard Gold */
          orange: '#e65c00',   /* Warm Appetizing Orange */
          cream: '#fdfbf7',    /* Elegant Linen Cream Background */
          dark: '#1a0f0d',     /* Warm Charcoal Dark */
          card: '#ffffff',     /* Pure Card White */
          veg: '#0f8a5f',      /* Veg Indicator Green */
          nonveg: '#c22929',   /* Non-Veg Indicator Red */
        }
      },
      fontFamily: {
        heading: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Plus Jakarta Sans', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'brand-sm': '0 4px 6px -1px rgba(140, 29, 39, 0.05), 0 2px 4px -1px rgba(140, 29, 39, 0.03)',
        'brand-md': '0 10px 15px -3px rgba(140, 29, 39, 0.08), 0 4px 6px -2px rgba(140, 29, 39, 0.04)',
        'brand-lg': '0 20px 25px -5px rgba(140, 29, 39, 0.12), 0 10px 10px -5px rgba(140, 29, 39, 0.04)',
        'brand-glow': '0 0 20px rgba(212, 154, 59, 0.3)',
      }
    },
  },
  plugins: [],
}
