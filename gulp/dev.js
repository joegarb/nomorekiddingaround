'use strict';

const gulp = require('gulp');
const runSequence = require('run-sequence');
const browserSync = require('browser-sync').create();
const modRewrite = require('connect-modrewrite');

gulp.task('dev', ['build-dev'], () => {
    browserSync.init({
        files: './dist/**/*',
        port: 8001,
        // Point browser-sync at our node express server
        proxy: 'http://localhost:8000'
    });

    return gulp.watch('./client/**/*.*').on('change', () => {
        runSequence(
            'build-dev',
            () => {
                browserSync.reload();
            }
        );
    });
});
