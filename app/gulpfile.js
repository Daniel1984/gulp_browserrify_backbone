var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    hbsfy = require('hbsfy'),
    stylus = require('gulp-stylus'),
    imagemin = require('gulp-imagemin'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    uglify = require('gulp-uglify'),
    gulpif = require('gulp-if'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    mocha = require('gulp-mocha'),
    cordova = require('cordova');

var isProduction = gulp.env.type === 'production' || false;

gulp.task('js', function() {
  gulp.src('assets/js/main.js')
    .pipe(plumber())
    .pipe(browserify({
      insertGlobals: true,
      transform: ['hbsfy']
    }))
    .pipe(concat('app.js'))
    .pipe(gulpif(isProduction, uglify())) // only minify if production
    .pipe(gulp.dest('../www/js'))
});

gulp.task('css', function() {
  gulp.src('assets/css/main.styl')
    .pipe(plumber())
    .pipe(stylus({
      set:['compress']
    }))
    .pipe(gulp.dest('../www/css'))
});

gulp.task('img', function() {
  gulp.src('assets/img/**')
    .pipe(plumber())
    .pipe(imagemin({optimizationLevel: 5}))
    .pipe(gulp.dest('../www/img'))
});

gulp.task('lint', function() {
  gulp.src('assets/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish));
});

gulp.task('cordova-br', function() {
  cordova.build(function() {
    cordova.run();
  });
});

gulp.task('test', function() {
  gulp.src('assets/tests/**/*.js')
    .pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function() {
  gulp.watch('assets/js/**', function() {
    gulp.run('js');
    gulp.run('lint');
  });
  gulp.watch('assets/img/**', function() {
    gulp.run('img'); 
  });
  gulp.watch('assets/css/**', function() {
    gulp.run('css');
  });
});

gulp.task('deploy', ['js', 'css', 'img']);
