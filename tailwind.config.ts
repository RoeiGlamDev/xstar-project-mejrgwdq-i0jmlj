import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        pink: {
          light: '#F8BBD0', // Light pink for accents
          DEFAULT: '#D81B60', // Main pink color
          dark: '#C2185B', // Darker pink for hover states
        },
        black: {
          DEFAULT: '#000000', // Main black color
          light: '#1C1C1C', // Light black for backgrounds
        },
      },
      fontFamily: {
        sans: ['Helvetica Neue', 'Arial', 'sans-serif'], // Elegant font family
      },
    },
  },
  variants: {
    extend: {
      // Add variants as needed
    },
  },
  plugins: [],
};

export default config;