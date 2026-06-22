/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        beam: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(700%)' },
        },
        pulseShadow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
      },
      animation: {
        beam: 'beam 4s linear infinite',
        pulseShadow: 'pulseShadow 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
