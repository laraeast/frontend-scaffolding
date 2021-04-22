const mix = require('laravel-mix');
const WebpackRTLPlugin = require('webpack-rtl-plugin');


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

if (mix.inProduction()) {
  mix.webpackConfig({
    plugins: [
      new WebpackRTLPlugin({
        diffOnly: false,
        minify: true,
      }),
    ],
  });
}