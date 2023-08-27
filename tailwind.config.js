/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      transitionProperty: {
        'height': 'height',
      }
    },
  },
  variants: {
    extend: {
      transitionProperty: ['hover', 'focus'],
    }
  },
  plugins: [],
}