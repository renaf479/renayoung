const
    autoprefixer = require('autoprefixer'),
    //browserSync = require('browser-sync'),
    child = require('child_process'),
    gulp = require('gulp'),
    connect = require('gulp-connect'),
    plumber = require('gulp-plumber'),
    postcss = require('gulp-postcss'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    gutil = require('gulp-util'),
    watch = require('gulp-watch');

const
    platform = process.platform,
    base = './',
    src = base + 'src/',
    dest = base + '_site/',
    paths = {
        js: src + '_js/',
        scss: src + '_scss/',
        css: base + 'css/'
    },
    site = {
        css: dest + 'css',
        js: dest + 'js'
    };

//Error handler
var onError = function (err) {
    gutil.log(err);
};

//Local Server
gulp.task('server-local', () => {
    connect.server({
        root: ['_site'],
        port: 4000
    });
});

//Jekyll:Build
gulp.task('build-jekyll', (code) => {
    return child.spawn('jekyll', ['build', '--incremental'], { stdio: 'inherit' }) // Adding incremental reduces build time.
        .on('error', (error) => onError(gutil.colors.red(error.message)))
        .on('close', code);
});

//Javascript
gulp.task('js', () => {
    return gulp
        .src(paths.js)
        .pipe(sourcemaps.init())
        .pipe
    ;
});

//Sass
gulp.task('sass', () => {
    return gulp
        .src(paths.scss + 'main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            includePaths: ['scss'],
            outputStyle: 'compressed'
        }))
        .pipe(postcss([autoprefixer({
            browsers: ['last 2 versions']
            })
        ]))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest(paths.css))
        .pipe(gulp.dest(site.css))
    ;
});

//Watch
gulp.task('watch', () => {
    gulp.watch(paths.scss + '**/*.scss', ['sass']);
});

gulp.task('dev', ['debug']);
gulp.task('default', ['sass', 'build-jekyll', 'server-local', 'watch']);