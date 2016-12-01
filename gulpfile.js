/// <binding ProjectOpened='watch:sass' />

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    uglify = require('gulp-uglify'),
    cssMin = require('gulp-cssmin'),
    templateCache = require('gulp-angular-templatecache'),
    preprocess = require('gulp-preprocess'),
    include = require('gulp-include');

var options = {
    sass: {
        src: 'src/twrSortableTable.scss',
        outputFilename: 'twrSortableTable.css',
        minifiedOutputFilename: 'twrSortableTable.min.css',
        distOutput: 'dist'
    },
    js: {
        src: 'src/twrSortableTable.js',
        outputFilename: 'twrSortableTable.js',
        outputFilenameMinified: 'twrSortableTable.min.js',
        distOutput: 'dist'
    }
}

gulp.task('default', ['buildJS', 'buildSass']);

gulp.task('buildJS', function () {
    return gulp.src(options.js.src)
        .pipe(include())
        .pipe(preprocess())
        .pipe(concat(options.js.outputFilename))
        .pipe(gulp.dest(options.js.distOutput))
        .pipe(concat(options.js.outputFilenameMinified))
        .pipe(uglify())
        .pipe(gulp.dest(options.js.distOutput));
});

gulp.task('buildSass', function () {
    return gulp.src(options.sass.src)
        .pipe(sass({ errLogToConsole: true }).on('error', sass.logError))
        .pipe(concat(options.sass.outputFilename))
        .pipe(gulp.dest(options.sass.distOutput))
        .pipe(concat(options.sass.minifiedOutputFilename))
        .pipe(cssMin({
            keepSpecialComments: 0
        }))
        .pipe(gulp.dest(options.sass.distOutput));
});

gulp.task('watch:sass', function () {
    gulp.watch(options.sass.src, ['buildSass']);
});