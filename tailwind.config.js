/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: '#FAF8F2',
          50: '#FFFFFF',
          100: '#FAF8F2',
          200: '#F3EFE4',
          300: '#EAE4D3',
        },
        sage: {
          DEFAULT: '#DCE8D7',
          50: '#F5F8F4',
          100: '#EBF2E8',
          200: '#DCE8D7',
          300: '#C5D8BF',
          400: '#A9C4A2',
        },
        freshGreen: {
          DEFAULT: '#71966B',
          light: '#8BAE86',
          dark: '#587A53',
        },
        forest: {
          DEFAULT: '#284B3C',
          light: '#36614E',
          dark: '#1C352A',
          900: '#152920',
        },
        charcoal: {
          DEFAULT: '#292D29',
          muted: '#525952',
          light: '#727B72',
        },
        beige: {
          DEFAULT: '#EDE3D5',
          light: '#F5EFE7',
          dark: '#DECFC0',
        },
        coral: {
          DEFAULT: '#F28B76',
          light: '#F8AC9C',
          dark: '#DD6F58',
        },
        warmYellow: {
          DEFAULT: '#F3C969',
          light: '#F7D789',
          dark: '#DEAF48',
        },
        lavender: {
          DEFAULT: '#B9ACE5',
          light: '#D0C6EE',
          dark: '#9A89D5',
        },
        peach: {
          DEFAULT: '#F6D8C7',
          light: '#FBE6DA',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(40, 75, 60, 0.06), 0 2px 6px -1px rgba(40, 75, 60, 0.04)',
        'card': '0 10px 30px -5px rgba(40, 75, 60, 0.08), 0 4px 10px -2px rgba(40, 75, 60, 0.04)',
        'elevated': '0 20px 40px -10px rgba(40, 75, 60, 0.12), 0 8px 16px -4px rgba(40, 75, 60, 0.06)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      }
    },
  },
  plugins: [],
}
