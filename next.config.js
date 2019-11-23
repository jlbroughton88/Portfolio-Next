const withCSS = require("@zeit/next-css");
const withSass = require('@zeit/next-sass');
const withImages = require('next-images');
const withFonts = require("next-fonts");

module.exports = withCSS(withSass(withImages(withFonts({
    // distDir: "_next",
    target: 'serverless',
    webpack (config, options) {
        config.module.rules.push({
            // test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
            // use: {
            //   loader: 'url-loader',
            //   options: {
            //     limit: 8192,
            //     publicPath: '/_next/static/',
            //     outputPath: 'static/',
            //     name: '[name].[ext]'
            //   }
            // }
        })
        return config;
    }
 }))));