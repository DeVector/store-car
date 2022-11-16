/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      '4xl': '1920px' 
      // => @media (min-width: 1920px) { ... }
    },

    fontFamily: {
      sans: ['Josefin Sans', 'sans-serif'],
    },

    textFillColor: theme => theme('borderColor'),
    textStrokeColor: theme => theme('borderColor'),
    textStrokeWidth: theme => theme('borderWidth'),

    paintOrde: {
      'fsm': { paintOrder: 'fill stroke markers' },
      'fms': { paintOrder: 'fill markers stroke' },
      'sfm': { paintOrder: 'stroke fill markers' },
      'smf': { paintOrder: 'stroke markers fill' },
      'mfs': { paintOrder: 'markers fill stroke' },
      'msf': { paintOrder: 'markers stroke fill' },
    },

    extend: {
      backgroundImage: {
        'icon-search': "url('./assets/icon _search_outline.svg')",
        'heart-clear': "url('./assets/heart.svg')",
        'heart-filled': "url('./assets/heartFilled.svg')"
      }
      },

      backgroundSize: {
      '24': '24px 24px'
      },
  },

  variants: { // all the following default to ['responsive']
    textFillColor: ['responsive'],
    textStrokeColor: ['responsive'],
    textStrokeWidth: ['responsive'],
    paintOrder: ['responsive'],
  },
  plugins: [
    require('tailwindcss-text-fill-stroke')(),
  ],
}