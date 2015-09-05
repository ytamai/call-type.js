'use strict';

var path         = require('path');

var gulp         = require('gulp');
var gulpif       = require('gulp-if');
var util         = require('gulp-util');

var sequence     = require('run-sequence');
var browserSync  = require('browser-sync');
var reload       = browserSync.reload;

var sourcemaps   = require('gulp-sourcemaps');
var uglify       = require('gulp-uglify');
var eslint       = require('gulp-eslint');

var browserify   = require('browserify');
var source       = require('vinyl-source-stream');
var buffer       = require('vinyl-buffer');
var watchify     = require('watchify');




var root   = './';
var build  = root + 'build/'
var ignore = [
  '!./node_modules/**',
  '!^_*',
  '!' + root +  'ignore/**',
  '!' + root +  'libs/**',
  '!' + root +  '**/libs/**',
  '!' + root +  '**/*.map',
  '!' + build + 'bundle.js'
];
function mergeIgnore(array){
  return ignore.concat(array);
}

var src={
  js:   mergeIgnore([root + '**/**.js'])
};



gulp.task('default', function(){
  browserSync({
    notify:    false,
    logPrefix: 'WSK',
    server:    {baseDir: root}
  });
  compile(false, true);
  gulp.watch(src.js,   ['lint', reload]);
});


gulp.task('lint', function(){
  return gulp.src(src.js.concat(src.jsx))
    .pipe(cached('lint'))
    .pipe(eslint({useEslintrc: true}))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});


gulp.task('bro-dev', function(){
  return compile(false);
} );

gulp.task('bro-prod', function(){
  return compile(true);
} );

gulp.task('watchify', function(){
  return compile(false, true);
} );

/**
 * @param {Boolean} isMinify true is minify。
 * @param {Boolean} isWatch  true is diff
 */
function compile(isUglify, isWatch, isLint){
  var _src       = root + 'app.js';
  var _dest      = build;
  var bundlejs   = 'bundle.js';
  if(isUglify){
    bundlejs = 'bundle.min.js';
  }

  var logger     = new bundleLogger(_src,bundlejs);
  var option     = {
        basedir:   './',
        debug:     true,
        transform: ['babelify']
      };

  var bundler = null;
  if(isWatch){
    option.cache        = {};
    option.packageCache = {};
    option.fullPaths    = false;

    bundler = watchify(browserify(_src, option));
    logger.watch();

  }else{
    bundler = browserify(_src, option);
  }

  function bundle(){
    logger.begin();
    return bundler
      .bundle()
      .on('error', handleError)
      .pipe(source(bundlejs))
      .pipe(buffer())
      .pipe(sourcemaps.init({loadMaps: true}))
      .pipe(gulpif(isUglify, uglify()))
      .pipe(sourcemaps.write('.'))
      .on('end', logger.end)
      .pipe(gulp.dest(_dest));
  }

  bundler.on('update', bundle);

  return bundle();
}

  var bundleLogger = function(_src, bundle){
  var beginTime;

  this.begin = function(){
    beginTime = process.hrtime();
    util.log('Bundling', util.colors.green(_src) + '...');
  };

  this.watch = function(){
    util.log('Watching files required by', util.colors.yellow(_src));
  };

  this.end = function(){
    var taskTime   = process.hrtime(beginTime);
    var prettyTime = prettyHrtime(taskTime);
    util.log(
      'Bundled',
      util.colors.green(bundle),
      'in',
      util.colors.magenta(prettyTime)
    );
  };
};

function handleError(){
  var args   = Array.prototype.slice.call(arguments);

  notify
    .onError({
      title: 'Task Error',
      message: "<%= error %>"
    })
    .apply(this,args);

  this.emit('end');
}

function throughError(){
  this.emit('end');
}