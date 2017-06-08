var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	watch = require('gulp-watch');

gulp.task('watch:css', function(){
	gulp.watch('_includes/css/#.css');
});

gulp.task('default', ['watch:css'] ,function(){
	gulp.src('js/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});
