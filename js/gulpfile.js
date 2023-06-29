var gulp = require('gulp');
var cleancss = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');

/*压缩CSS*/
gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(cleancss())
        .pipe(gulp.dest('./public'));
});

/*压缩html文件*/
gulp.task('minify-html', function() {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
        }))
        .pipe(gulp.dest('./public'));
});

/*压缩JS文件*/
gulp.task('minify-js', function() {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});

gulp.task('default', ['minify-html', 'minify-css', 'minify-js']);
