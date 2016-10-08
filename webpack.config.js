let webpack = require('webpack');
let path = require('path');

module.exports = {
    entry: {
        index: './src/index.tsx'
    },
    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ["", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules | bower_components)/,
            loaders: ['babel?presets[]=react,presets[]=es2015']
        }, {
            test: /\.tsx?$/,
            exclude: /(node_modules | bower_components)/,
            loaders: ['ts-loader']
        }]
    }
};