'use strict';

const gulp = require('gulp');
const eslint = require('gulp-eslint');

gulp.task('lint', [], () => {
    return gulp
        .src('client/**/*.js')
        .pipe(eslint())
        .pipe(eslint.format());
});
