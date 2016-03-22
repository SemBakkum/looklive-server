var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');

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
        .pipe(gulp.dest('dist/css'));
});

gulp.task('compress', function() {
    return gulp.src('public/js/app.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

gulp.task('watch', function() {
    gulp.watch('public/js/app.js', ['lint', 'compress']);
    gulp.watch('public/styles/*.css', ['minify-css']);
});

gulp.task('default', ['lint', 'minify-css', 'compress', 'watch']);

