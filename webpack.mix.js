// webpack.mix.js

let mix = require('laravel-mix');
const local = 'http://';

mix.js('src/js/app.js', 'js')
    .js('src/js/screen-size.js', 'js')
    .js('src/js/my-ip.js', 'js')
    .sass('src/scss/style.scss', 'css')
    .sass('src/scss/screen-size.scss', 'css')
    .sass('src/scss/my-ip.scss', 'css')
    .sass('src/scss/home.scss', 'css')
    .setPublicPath('dist')
    .options({
        processCssUrls: false,
        postCss: [
            require('tailwindcss')
        ],
    })
    .browserSync({
        proxy: local,
        injectChanges: true,
        port: 8001,
        files: [
            './dist/css/*.css',
            './dist/js/*.js',
        ],
    })
    .autoload({
        jquery: ['$', 'window.jQuery']
    })
    .version();