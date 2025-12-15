/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(-10px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      colors: {
        brand: {
          orange: "#FF7A00",
          dark: "#0E0E10",
          black: "#000000",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Segoe UI", "Roboto", "Arial"],
        cursive: ["Great Vibes", "cursive"],
      },
      boxShadow: {
        glow: "0 0 20px rgba(255, 122, 0, 0.35)",
      },
    },
    plugins: [],
  }
};
