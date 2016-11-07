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
// 解耦gulp任务之间的依赖，增强任务的复用
// gulp.task('currTask', 'dependTask,，function(){})当前任务和依赖任务有了耦合性，当前任务无法脱离依赖任务使用
let runSequence = require('gulp-run-sequence');

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
        console.log('compiling js is Done！');
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

gulp.task('prepareCDN', function() {
    // 将对应的三方库拷贝到根目录下
    // base默认指**之前的路径
    // 自行设定base之后，会保留base之后的路径
    var libs = ['./node_modules/jquery/**/*', './node_modules/moment/**/*',
        './node_modules/react/**/*', './node_modules/react-dom/**/*'
    ];
    return gulp.src(libs, { base: './node_modules' }).pipe(gulp.dest('./cdn'));
})

gulp.task('resources', function() {
    // 此处可以将图片资源，三方库，字体等一并拷贝到部署路径中
    var resources = ['./cdn/jquery/**/*', './cdn/react/**/*', './cdn/moment/**/*', './cdn/react-dom/**/*'];
    return gulp.src(resources, { base: '.' }).pipe(gulp.dest(output));
})

gulp.task('server', function() {
    let express = require('express');
    var app = express();
    app.use(express.static('./dev/dist'));
    var server = app.listen(8989, function() {
        var host = server.address().address;
        var port = server.address().port;
        console.log('Server listening at http://%s:%s', host, port);
    });
})

gulp.task('dev', function() {
    runSequence('html', 'js', 'prepareCDN', 'resources', 'server');
})