var gulp = require('gulp');

require('./tasks/scripts');

gulp.task('dev' 	, ['watch']);
gulp.task('default' , ['dev']);