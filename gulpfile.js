const gulp = require('gulp');
const watch = require('gulp-watch');
const gutil = require('gulp-util');
const child = require('child_process');
const connect = require('gulp-connect');

//Jekyll:Build
gulp.task('build-jekyll', (code) => {
    return child.spawn('jekyll', ['build', '--incremental'], { stdio: 'inherit' }) // Adding incremental reduces build time.
        .on('error', (error) => gutil.log(gutil.colors.red(error.message)))
        .on('close', code);
});

//Local Server
gulp.task('server-local', () => {
    connect.server({
        root: ['_site'],
        port: 4000
    });
});

//Watch
gulp.task('watch', () => {});

gulp.task('dev', ['default']);
gulp.task('default', ['build-jekyll', 'server-local']);