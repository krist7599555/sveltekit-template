module.exports = {
  plugins: [
    require('cssnano'),
    require('tailwindcss/nesting'),
    require('tailwindcss')(),
    require('autoprefixer'),
    require('postcss-import')
  ]
};
