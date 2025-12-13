// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-blue': '#10b981', // Tailwind 'emerald-500' for a fresh look
        'accent-green': '#059669', // Tailwind 'emerald-600'
      }
    },
  },
  plugins: [],
}