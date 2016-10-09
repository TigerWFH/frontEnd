// name: gulpfile.js
// author: monkey@lwork.com
// date: 10-8-2016
// functions:
// 安排任务流
// gulp.src, gulp.dest, gulp.task, gulp.watch
// libs
let gulp = require('gulp');
let webpack = require('webpack');
let gutil = require("gulp-util");
let output = './dev/dist';

function compileHTML(isWatch) {
    if (isWatch) {
        gulp.watch('./*.html', function() {
            compile();
        });
    } else {
        compile();
    }

    function compile() {
        gulp.src('./*.html').pipe(gulp.dest(output));
    }
}

function compileJS(isWatch) {
    let webpack = require('webpack');
    let config = require('./webpack.config.js');
    let compiler = webpack(config);

    if (isWatch) {
        let watcher = compiler.watch({
            aggregateTimeout: 300,
            poll: true
        }, handler);
    } else {
        compiler.run(handler);
    }

    function handler(err, stats) {
        if (err) throw new gutil.PluginError("[webpack]", err);
        let result = stats.toJson();
        if (result.errors.length > 0) throw new gutil.PluginError("[webpack-build]", result.errors);
        else {
            gutil.log("[webpack]", stats.toString({ chunks: false, colors: true }));
            console.log('compiling js is Done！');
        }
    }
}

function compileCSS(isWatch) {
    if (isWatch) {
        gulp.watch('./css/**/*.css', function() {
            compile();
        });
    } else {
        compile();
    }

    function compile() {
        console.log('compiling css is Done!');
    }
}

gulp.task('html', function() {
    compileHTML(false);
});

gulp.task('html-watch', function() {
    compileHTML(true);
});

gulp.task('js', function() {
    compileJS(false);
});

gulp.task('js-watch', function() {
    compileJS(true);
});