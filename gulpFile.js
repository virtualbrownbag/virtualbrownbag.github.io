var gulp = require("gulp");
var sass = require('gulp-sass');
var webserver = require("gulp-webserver");
var concatCss = require('gulp-concat-css');

gulp.task('sass', function () {
  return gulp.src('styles/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(concatCss('main.css'))
    .pipe(gulp.dest('css'));
});

gulp.task('watch', function() {
  return gulp.watch('./styles/**.*', ['sass']);
});

gulp.task('default', function() {
  return gulp.src('./')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});