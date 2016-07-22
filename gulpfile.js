var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var babel = require("gulp-babel");
var plumber = require('gulp-plumber');
var uglify = require('gulp-uglify');


gulp.task('babel',function(){
	gulp.src('src/scripts/*.js')
	.pipe(concat('scripts.js'))
	.pipe(plumber())
	.pipe(babel())
	.pipe(gulp.dest('src/es5/'))
});

gulp.task('js',function(){
	gulp.src('src/es5/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('build/scripts/'));
});

gulp.task('default',['browserSync','babel','js'],function(){
	
	
	gulp.watch('src/scripts/**/*.js',['babel']).on('change',browserSync.reload);
	
	gulp.watch('src/es5/*.js',['js']).on('change',browserSync.reload);
	
});

gulp.task('browserSync',function(){
	browserSync.init({
		server : {
			baseDir: 'build'
		}
	});
});
