const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const uglify = require('gulp-uglify');
const nodemon = require('gulp-nodemon');
const inject = require('gulp-inject-string');
const merge = require('merge-stream');
const babel = require('gulp-babel');
const del = require('del');
const config = require('./config');
const port = config.port;

// =======================================

// Mutual tasks

// Clean dist
gulp.task('cleanDist', function () {
    return del('dist');
});

// Copy bower dependencies
gulp.task('copy:deps', function () {
    let bootstrap = gulp.src(['./bower_components/bootstrap/dist/**/**', '!**/bootstrap.css', '!**/bootstrap.js', '!**/npm.js', '!**/bootstrap-theme.*'])
        .pipe(gulp.dest('dist/vendor/bootstrap'));

    let fontAwesome = gulp.src('./bower_components/font-awesome/css/font-awesome.min.css')
        .pipe(gulp.dest('dist/vendor/font-awesome'));

    let jquery = gulp.src('./bower_components/jquery/dist/jquery.min.js')
        .pipe(gulp.dest('dist/vendor/jquery'));

    let select2 = gulp.src(['./bower_components/select2/dist/**/select2*', '!**/select2.css', '!**/select2.js', '!**/select2.full*'])
        .pipe(gulp.dest('dist/vendor/select2'));

    return merge(bootstrap, fontAwesome, jquery, select2);
});

// =======================================

// Dev tasks

// Copy files to dist - as is
gulp.task('copy:js', function () {
    return gulp.src('public/js/*.js')
        .pipe(gulp.dest('dist/js'));
});
gulp.task('copy:css', function () {
    return gulp.src('public/css/*.css')
        .pipe(gulp.dest('dist/css'));
});
gulp.task('copy:html', function () {
    return gulp.src('./public/*.html')
        .pipe(gulp.dest('./dist'));
});
gulp.task('copy', gulp.parallel('copy:js', 'copy:css', 'copy:html', 'copy:deps'));

// Watch tasks
gulp.task('watch:html', function(done) {
    gulp.watch('public/*.html', gulp.series('copy:html'));
    done();
});
gulp.task('watch:css', function(done) {
    gulp.watch('public/css/*.css', gulp.series('copy:css'));
    done();
});
gulp.task('watch:js', function(done) {
    gulp.watch('public/js/*.js', gulp.series('copy:js'));
    done();
});
gulp.task('watch', gulp.parallel('watch:css', 'watch:html', 'watch:js'));

// Configure the browserSync task
gulp.task('browserSync', function () {
    return browserSync.init({
        proxy: "http://localhost:" + config.port,
        files: ["dist/**/*.*"],
        port: parseInt(config.port) + 3000
    })
});

// Configure the nodemon task
gulp.task('nodemon', function (cb) {
    let started = false;
    return nodemon({
        script: 'app.js',
        ignore: [
            'gulpfile.js',
            'node_modules/**',
            'public/**',
            'dist/**'
        ],
        verbose: true
    }).on('start', function () {
        if (!started) {
            cb();
            started = true;
        }
    })
});

gulp.task('dev', gulp.series('cleanDist', 'copy', 'nodemon', gulp.parallel('browserSync', 'watch')));

// =======================================

// Production tasks

// Minify, and copy CSS to dist
gulp.task('minify:css', function () {
    return gulp.src('public/css/*.css')
        .pipe(cleanCSS({compatibility: 'ie8'})).on('error', swallowError)
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/css'))
});

// Minify, and copy JS to dist
gulp.task('minify:js', function () {
    return gulp.src('public/js/*.js')
        .pipe(babel({
            presets: ['env']
        })).on('error', swallowError)
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('dist/js'))
});

// Change web deps to .min for js and css
gulp.task('to:min', function () {
    // Match ending in *s (js or css) that doesn't have .min before them, and add .min before :)
    // let myregex = '([^min]{3}\\.)([a-z]{1,2}s)';
    let myregex = '^(?!\\/vendor(?:\\/|$))(?!.*\\bmin\\.[^.]*$)(.*\\.)';
    let myreplace = '$1min.';
    return gulp.src('dist/*.html')
        .pipe(inject.replace(myregex, myreplace))
        .pipe(gulp.dest('dist'));
});

gulp.task('production', gulp.series('cleanDist', gulp.parallel('copy:html', 'copy:deps', 'minify:css', 'minify:js'), 'to:min'));

function swallowError(error) {
    // If you want details of the error in the console
    console.log(error.toString());
    this.emit('end')
}
