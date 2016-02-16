var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var haml = require('gulp-ruby-haml');

var notifySass = {
  title: 'Sass',
  message: 'Compiled',
  onLast: true
}

var notifyHaml = {
  title: 'Haml',
  message: 'Compiled',
  onLast: true
}

gulp.task('layout:connect', function() {
  $.connect.server({ root: 'layout', port: 7777, livereload: false });
});

gulp.task('layout:sass', function() {
  gulp.src('./source/sass/general_all.scss')
    .pipe($.compass({
      css: './public/css',
      sass: './source/sass'
    }))
    .pipe(gulp.dest('./public/css'))
    .pipe($.notify(notifySass));
});

gulp.task('layout:haml', function () {
  gulp.src('./source/haml/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./public'))
    .pipe($.notify(notifyHaml));
});

gulp.task('layout:watch', function() {
  gulp.watch(['./source/haml/**/*.haml'], ['layout:haml']);
  gulp.watch(['./source/sass/*.sass','./source/sass/*.scss'], ['layout:sass']);
});
