"use strict";

const { task, series, parallel } = require("gulp");
const P = require("./gulp-tasks/gulp-plugins");

const settings = {
  isBuild: false,
  dist: "./dist",
  src: "./src",
  temp: "./temp",
}

const tasks = require("require-dir")("gulp-tasks");
tasks.del(P, settings);
tasks.copy(P, settings);
tasks.css(P, settings);
tasks.pug(P, settings);
tasks.nodemon(P, settings);
tasks.browserSync(P, settings);

task("set-build-env", (cb) => {
  settings.isBuild = true;
  cb();
});

task(
  "default-build-tasks",
  parallel("sass", "copy")
);

task(
  "default",
  series("del", "default-build-tasks", "browserSync")
);

task(
  "prod",
  series(
    "del",
    "set-build-env",
    "default-build-tasks",
    "pug"
  )
);
const gulp = require('gulp');
const shell = require('gulp-shell');

// Task to deploy to the main branch
gulp.task('deploy', function() {
  return gulp.src('*', {read: false})
    .pipe(shell([
      'git checkout main',               // Switch to the main branch
      'git pull origin main',            // Pull latest changes from remote
      'rm -rf *',                        // Remove all files in the current directory
      'cp -r dist/* .',                  // Copy files from dist to the root directory
      'git add .',                       // Add the new files
      'git commit -m "Deploy from dist"',// Commit changes
      'git push origin main'             // Push to the main branch
    ], {cwd: './'}));
});

