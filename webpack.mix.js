const mix = require('laravel-mix'),
  WebpackRTLPlugin = require('webpack-rtl-plugin');

require('laravel-mix-purgecss');

mix.pug = require('laravel-mix-pug');

/*
 |--------------------------------------------------------------------------
 | Public Path
 |--------------------------------------------------------------------------
 |
 | The font files and background images will copy to public path.
 |
 */
mix.setPublicPath('./public');

/*
 |--------------------------------------------------------------------------
 | Resource Root
 |--------------------------------------------------------------------------
 |
 | The prefix that will added before font files and backgrounds links in compiled css files.
 |
 */
mix.setResourceRoot('../');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('src/js/app.js', 'public/js')
  .sass('src/sass/app.scss', 'public/css')
  .copyDirectory('src/images', 'public/images');

mix.pug('src/pug/pages/*.pug', '../../../public', {
  pug: {
    pretty: true
  }
});

// Remove unused css
mix.purgeCss({
  folders: ['./public'],
});

// Handle rtl
mix.webpackConfig({
  plugins: [
    new WebpackRTLPlugin({
      diffOnly: false,
      minify: true,
    }),
  ],
});