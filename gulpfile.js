/// <binding ProjectOpened='watch:sass' />

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    cssMin = require('gulp-minify-css'),
    jscs = require('gulp-jscs'),
    jshint = require('gulp-jshint'),
    stylish = require('gulp-jscs-stylish');

var options = {
    sass: {
        src: 'src/twrSortableTable.scss',
        outputFilename: 'twrSortableTable.css',
        minifiedOutputFilename: 'twrSortableTable.min.css',
        srcOutput: 'src',
        distOutput: 'dist'
    },
    js: {
        src: 'src/twrSortableTable.js',
        outputFilename: 'twrSortableTable.min.js',
        distOutput: 'dist'
    }
}

gulp.task('default', ['buildJS', 'buildSass']);


gulp.task('buildJS', function () {
    return gulp.src(options.js.src)
        .pipe(concat(options.js.outputFilename))
        .pipe(uglify())
        .pipe(gulp.dest(options.js.distOutput));
});

gulp.task('buildSass', function () {
    return gulp.src(options.sass.src)
        .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
        .pipe(concat(options.sass.outputFilename))
        .pipe(gulp.dest(options.sass.srcOutput))
        .pipe(concat(options.sass.minifiedOutputFilename))
        .pipe(cssMin({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest(options.sass.distOutput));
});

gulp.task('lintJS', function () {
    return gulp.src('src/**/*.js')
        .pipe(jshint())
        .pipe(jscs())
        .pipe(stylish.combineWithHintResults())
        .pipe(jshint.reporter('jshint-stylish'));
})

gulp.task('watch:sass', function () {
    gulp.watch(options.sass.src, ['buildSass']);
});