/** @type {import('tailwindcss').Config} */
export default {
  content: ['src/style.css'],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1, h2, h3, h4': {
              fontWeight: 'normal'
            },
          },
        },
      },
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

