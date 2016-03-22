var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');

gulp.task('optimize', function() {
	return gulp.src('public/images/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('public/dist/images'));
});

gulp.task('lint', function() {
    return gulp.src('public/js/app.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

gulp.task('minify-css', function() {
    return gulp.src('public/styles/*.css')
        .pipe(cleanCSS({debug: true}, function(details) {
            console.log(details.name + ': ' + details.stats.originalSize);
            console.log(details.name + ': ' + details.stats.minifiedSize);
        }))
        .pipe(gulp.dest('public/dist/css'));
});

gulp.task('compress', function() {
    return gulp.src('public/js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('public/dist/js'));
});

gulp.task('watch', function() {
    gulp.watch('public/js/app.js', ['lint', 'compress']);
    gulp.watch('public/styles/*.css', ['minify-css']);
    gulp.watch('public/images/*', ['optimize']);
});

gulp.task('default', ['optimize', 'lint', 'minify-css', 'compress', 'watch']);

