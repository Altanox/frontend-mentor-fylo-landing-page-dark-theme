/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.html'],
  theme: {
    colors: {
      'primary-bg-200': 'hsl(219, 30%, 18%)',
      'primary-bg-300': 'hsl(217, 28%, 15%)',
      'primary-bg-500': 'hsl(218, 28%, 13%)',
      'primary-bg-700': 'hsl(216, 53%, 9%)',
      'accent-cyan': 'hsl(176, 68%, 64%)',
      'accent-blue': 'hsl(198, 60%, 50%)',
      'accent-red': 'hsl(0, 100%, 63%)',
      'neutral-white': 'hsl(0, 0%, 100%)',
    },
    fontFamily: {
      body: '"Open\\ Sans", sans-serif;',
      accent: '"Raleway", sans-serif;',
    },
    gradientColorStopPositions: {
      40: '0 40%',
      60: '0 60%',
    },
    content: {
      quotes: 'url(./images/bg-quotes.png)',
    },
  },
  plugins: [],
};
