var gulp=require('gulp');
var less = require('gulp-less');
var connect = require('gulp-connect');

gulp.task('serve',function(){
	connect.server();
});

gulp.task('less',function(){
	gulp.src('src/less/*.less')
	.pipe(less())
	.pipe(gulp.dest('src/css'));
});
gulp.task('default',['less','serve'],function(){

});