'use strict';

const gulp = require('gulp');
const browserify = require('gulp-browserify');
const concat = require('gulp-concat');
const sass = require('gulp-sass');
const log = require('fancy-log');

// Similar to the production build task, but without a few things like minification
gulp.task('build-dev', ['clean', 'lint'], () => {
    return Promise.all([
        new Promise((resolve, reject) => {
            log('Building javascript');
            gulp
                .src('client/index.js')
                .pipe(browserify())
                .pipe(concat('bundle.js'))
                .pipe(gulp.dest('dist'))
                .on('end', resolve);
        }),
        new Promise((resolve, reject) => {
            log('Copying assets');
            gulp
                .src('client/**/*.{png,jpg,ico,svg,xml,txt,webmanifest,js}')
                .pipe(gulp.dest('dist'))
                .on('end', resolve);
        }),
        new Promise((resolve, reject) => {
            log('Copying html');
            gulp
                .src('client/**/*.html')
                .pipe(gulp.dest('dist'))
                .on('end', resolve);
        }),
        new Promise((resolve, reject) => {
            log('Processing sass');
            gulp
                .src('client/**/*.scss')
                .pipe(sass({outputStyle: 'expanded', indentWidth: 4}))
                .pipe(concat('bundle.css'))
                .pipe(gulp.dest('dist/shared/styles'))
                .on('end', resolve);
        })
    ]);
});
