/**  @type {import('tailwindcss').Config} */
// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors:{
      'dPrimary': {
        100:'#2563eb',
        200:'#598EF3',
        300:'#D3E6FE'
      },
      'daccent': {
        100:'#d946ef',
        200:'#fae8ff'
      },
      'dtext': {
        100:'#cbd5e1',
        200:'#94a3b8'
      },
      'dbg': {
        100:'#1e293b',
        200:'#334155',
        300:'#475569'
      },

    }
  },
  
  },
  plugins: [],
};

  