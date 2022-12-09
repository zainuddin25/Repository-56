/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'green-primary' : '#57dfc2',
        'black-primary' : '#0a192f',
        'white-secondary' : '#8892b0',
        'white-primary' : '#ccd6f6'
      }, 
      fontFamily : {
        'berkshire' : ['Berkshire Swash'],
        'space' : ['Space Mono'],
        'fira' : ['Fira Code']
      }
    },
  },
  plugins: [],
}
