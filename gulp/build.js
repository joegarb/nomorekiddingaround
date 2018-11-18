'use strict';

const gulp = require('gulp');
const browserify = require('gulp-browserify');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const htmlmin = require('gulp-htmlmin');
const cleanCSS = require('gulp-clean-css');
const sass = require('gulp-sass');
const inlineSource = require('gulp-inline-source');
const path = require('path');
const log = require('fancy-log');
const swPrecache = require('sw-precache');

gulp.task('build', [], () => {
    return Promise.all([
        new Promise((resolve, reject) => {
            log('Building javascript');
            gulp
                .src('client/index.js')
                .pipe(browserify())
                .pipe(uglify())
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
            log('Minifying html');
            gulp
                .src('client/**/*.html')
                .pipe(htmlmin({collapseWhitespace: true}))
                .pipe(gulp.dest('dist'))
                .on('end', resolve);
        }),
        new Promise((resolve, reject) => {
            log('Processing sass');
            gulp
                .src('client/**/*.scss')
                .pipe(sass({outputStyle: 'expanded', indentWidth: 4}))
                .pipe(cleanCSS({compatibility: 'ie8'}))
                .pipe(concat('bundle.css'))
                .pipe(gulp.dest('dist/shared/styles'))
                .on('end', resolve);
        })
    ]).then(() => {
        return new Promise((resolve, reject) => {
            log('Inlining js/css/images into the html');
            gulp
                .src('dist/**/*.html')
                .pipe(inlineSource({rootpath: path.resolve('dist')}))
                .pipe(gulp.dest('dist'))
                .on('end', () => {

                    log('Generating service worker to cache resources for offline mode');

                    swPrecache.write(path.join('dist', 'service-worker.js'), {
                        staticFileGlobs: ['dist/**/*.{js,html,css,png,jpg,gif}'],
                        stripPrefix: 'dist',
                        navigateFallback: '/index.html',
                        // Prevent fallback to index.html for API routes when navigating directly to them in the browser
                        navigateFallbackWhitelist: [new RegExp('^(?!/api/).*$')],
                        // Allow ajax API responses to be cached as a fallback
                        runtimeCaching: [{
                            urlPattern: new RegExp('/api/(.*)'),
                            handler: 'networkFirst'
                        }]
                    }, resolve);
                });
        });
    });
});
