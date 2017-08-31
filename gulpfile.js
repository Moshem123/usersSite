const gulp = require('gulp');
const browserSync = require('browser-sync').create();
let reload = browserSync.reload;
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const nodemon = require('gulp-nodemon');
const babel = require('gulp-babel');

// Copy js + css to dist
gulp.task('jscss', function () {
    return gulp.src(['public/**/*.css', 'public/**/*.js'])
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify compiled CSS
gulp.task('minify-css', ['jscss'], function () {
    return gulp.src('public/**/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'})).on('error', swallowError)
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

// Minify, and copy JS to dist
gulp.task('minify-js', ['jscss'], function () {
    return gulp.src('public/**/*.js')
        .pipe(babel({
            presets: ['env']
        })).on('error', swallowError)
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist'))
        .pipe(browserSync.reload({
            stream: true
        }))
});

gulp.task('default', ['jscss', 'minify-css', 'minify-js']);

//Configure the browserSync task
gulp.task('browserSync', ['nodemon'], function () {
    browserSync.init({
        proxy: "http://localhost:3000",
        files: ["public/**/*.*"],
        port: 6000
    })
});

gulp.task('nodemon', function (cb) {
    let started = false;
    return nodemon({
        ignore: [
            'gulpfile.js',
            'node_modules/*',
            'public/*',
            'dist/*'
        ]
    }).on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    })
});

// Dev task with browserSync
gulp.task('dev', ['browserSync', 'jscss', 'minify-css', 'minify-js'], function () {
    gulp.watch('public/css/*.css', ['minify-css']);
    gulp.watch('public/js/*.js', ['minify-js']);
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('public/*.html', reload);
    gulp.watch('dist/js/*.js', reload);
});

function swallowError(error) {

    // If you want details of the error in the console
    console.log(error.toString());

    this.emit('end')
}