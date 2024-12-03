/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#038C8C', // Cor principal (intermediária)
          dark: '#025159', // Variante escura
          light: '#03A696', // Variante clara
        },
        accent: {
          DEFAULT: '#F28705', // Cor de destaque vibrante
        },
        secondary: {
          DEFAULT: '#025159', // Cor secundária principal
          dark: '#012E40', // Variante escura
          light: '#038C8C', // Variante clara
        },
        background: {
          DEFAULT: '#012E40', // Fundo principal escuro
          light: '#03A696', // Fundo alternativo claro
        },
        text: {
          primary: '#038C8C', // Texto principal
          secondary: '#F28705', // Texto secundário de destaque
        },
      },
    },
  },
  plugins: [],
};
