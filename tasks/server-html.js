var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('connect', function() {
  $.connect.server({ root: 'public', port: 5555, livereload: false });
});

gulp.task('html', function() {
  return gulp.src('./public/index.html')
    .pipe($.plumber())
    .pipe(gulp.dest('./public'));
});
