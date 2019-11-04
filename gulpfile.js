var gulp = require('gulp');
var minifycss = require('gulp-clean-css');
var terser = require('gulp-terser');
var htmlmin = require('gulp-htmlmin');
var htmlclean = require('gulp-htmlclean');
var imagemin = require('gulp-imagemin');

gulp.task('minify-html', function() {
    return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
            removeComments: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true,
        }))
        .pipe(gulp.dest('./public'))
});

gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss({
            compatibility: 'ie8',
            rebase: false,
        }))
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-js', function() {
    return gulp.src('./public/js/**/*.js')
        .pipe(terser())
        .pipe(gulp.dest('./public'));
});

gulp.task('minify-images', function() {
    return gulp.src('./public/images/**/*.*')
        .pipe(imagemin(
        [imagemin.gifsicle({'optimizationLevel': 3}), 
        imagemin.jpegtran({'progressive': true}), 
        imagemin.optipng({'optimizationLevel': 7}), 
        imagemin.svgo()],
        {'verbose': true}))
        .pipe(gulp.dest('./public/images'))
});


gulp.task('default', gulp.series('minify-html','minify-css','minify-js','minify-images'),function(){
    
});