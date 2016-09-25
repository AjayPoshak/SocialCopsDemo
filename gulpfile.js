var gulp = require('gulp'),
    babel = require('gulp-babel'),
    plumber = require('gulp-plumber'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache'),
    del = require('del'),
    socialCopsPath = 'SocialCopsDemo/*.js',
    compilePath = 'SocialCopsDemo/compiled';

gulp.task('babel', function() {
    gulp.src([socialCopsPath])
        .pipe(plumber())
        .pipe(babel())
        .pipe(gulp.dest(compilePath + '/babel'));
});

gulp.task('styles', function() {
    return gulp.src('styles/*.css')
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(cssnano())
        .pipe(gulp.dest('dist/assets/styles'));
});

gulp.task('scripts', function() {
    return gulp.src(['js/*.js', 'js/*/*.js'])
        .pipe(jshint('.jshintrc'))
        .pipe(jshint.reporter('default'))
        .pipe(babel())
        .pipe(concat('main.js'))
        .pipe(gulp.dest('dist/assets/js'))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets/js'))
});

gulp.task('images', function(){
  gulp.src("images/*.*")
      .pipe(cache(imagemin({optimizationLevel: 5, progressive: true, interlaced: true })))
      .pipe(gulp.dest('dist/assets/images'));
});
gulp.task('clean', function() {
    return del(['dist/assets/js', 'dist/assets/styles']);
});
// gulp.task('watch', function() {
//     gulp.watch([socialCopsPath], ['babel']);
// });
gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images');
});
gulp.task('watch', function(){
  //Watch CSS files
  gulp.watch('styles/*.css', ['styles']);
  //Watch JS files
  gulp.watch('js/*/*.js', ['scripts']);
  //Watch images
  gulp.watch('images/*.*', ['images']);
});
//gulp.task('default', ['watch', 'babel']);
