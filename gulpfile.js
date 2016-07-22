var gulp = require('gulp');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
var babel = require("gulp-babel");
var vendor = require('gulp-concat-vendor');
var plumber = require('gulp-plumber');


gulp.task('babel',function(){
	gulp.src('src/scripts/*.js')
	.pipe(concat('scripts.js'))
	.pipe(plumber())
	.pipe(babel())
	.pipe(gulp.dest('build/scripts/'));
});

gulp.task('vendor-js',function(){
	gulp.src([
		'node_modules/bootstrap/dist/js/bootstrap.min.js'
	])
	.pipe(vendor('vendor.js'))
	.pipe(gulp.dest('build/scripts/'));
});

gulp.task('vendor-css',function(){
        gulp.src([
			'node_modules/bootstrap/dist/css/bootstrap.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.css'
        ])
        .pipe(vendor('vendor.css'))
        .pipe(gulp.dest('build/styles/'));
});


gulp.task('default',['browserSync','vendor-js','vendor-css','babel'],function(){

	gulp.watch('build/*.html').on('change', browserSync.reload);

	gulp.watch('src/scripts/**/*.js',['babel']).on('change',browserSync.reload);

});

gulp.task('browserSync',function(){
	browserSync.init({
		server : {
			baseDir: 'build'
		}
	});
});
