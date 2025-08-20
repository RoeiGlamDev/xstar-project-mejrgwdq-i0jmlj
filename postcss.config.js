import autoprefixer from 'autoprefixer'; // Importing autoprefixer for vendor prefixing
import cssnano from 'cssnano'; // Importing cssnano for minifying CSS

export default {
  plugins: [
    autoprefixer(), // Adding autoprefixer to the PostCSS plugins
    cssnano({ preset: 'default' }) // Adding cssnano for CSS minification
  ]
};