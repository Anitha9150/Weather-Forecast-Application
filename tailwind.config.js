// tailwind.config.js
module.exports = {
  content: [
    "./index.html", // Add index.html if you're using Tailwind in it
    "./src/**/*.{html,js}" // This will include all HTML and JS files inside src/ folder
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          500: '#6b7280', // custom gray value
          700: '#4b5563', // custom gray value
        },
      },
    },
  },
  
  plugins: [],
};



