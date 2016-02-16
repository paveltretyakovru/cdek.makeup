var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var sassNotify = {
  title: 'Sass',
  message: 'Done!',
  onLast: true
};

gulp.task('sass', function() {
  gulp.src('./source/sass/general_all.scss')
    .pipe($.compass({
      sass: './source/sass' ,
      css : './public/css'
    }))
    .pipe($.rename('bundle.css'))
    .pipe(gulp.dest('./public/css'))
    .pipe($.notify(sassNotify));
});