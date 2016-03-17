var gulp = require('gulp');
var stylus = require('gulp-stylus');
var plumber = require('gulp-plumber');

gulp.task('stylus', function() {
  gulp.src('public/css/style.styl')
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest('public/css'));
});

gulp.task('watch', function() {
  gulp.watch('public/css/*.styl', ['stylus']);
});

gulp.task('default', ['stylus', 'watch']);