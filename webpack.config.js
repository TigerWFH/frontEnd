// name: webpack.config.js
// author: monkey@lwork.com
// date: 10-8-2016
// functions:
// 1.编译文件
// 2.压缩文件

// libs
let webpack = require('webpack');
let path = require('path');

module.exports = {
    "entry": {
        index: './src/index.tsx',
        browser: './src/browser.ts'
    },
    "output": {
        path: path.resolve('./dev/dist'),
        filename: '[name].js'
    },
    "resolve": {
        extensions: ["", ".ts", ".tsx", ".js"]
    },
    "module": {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules | bower_components)/,
            loaders: ['babel?presets[]=react,presets[]=es2015']
        }, {
            test: /\.tsx?$/,
            exclude: /(node_modules | bower_components)/,
            loaders: ['ts-loader']
        }]
    },
    "plugins": [],
    "externals": {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'jquery': 'jQuery',
        'moment': 'moment'
    }
};