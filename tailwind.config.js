// /** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      colors: {
      dark: '#0f172a', // slate-900
      primary: '#7c3aed' // violet-600
    }},
  },
  plugins: [],
}

