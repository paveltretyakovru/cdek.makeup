
var gulp = require('gulp');

var contentNotify = {
  title: 'Content',
  message: 'Done!',
  onLast: true
};

gulp.task('images', function(){
  return gulp.src('./source/images/**/*.*')
    .pipe(gulp.dest('./pulic/images'));
});

gulp.task('fonts', function(){
  return gulp.src('./source/fonts/**/*.*')
    .pipe(gulp.dest('./pulic/fonts'));
});

gulp.task('video', function(){
  return gulp.src('./source/video/**/*.*')
    .pipe(gulp.dest('./pulic/video'));
});

gulp.task('content', ['images', 'fonts', 'video']);