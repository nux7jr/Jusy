const { notify } = require("browser-sync");
const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browsersync = require("browser-sync").create();
const concat = require("gulp-concat");

// Sass Task

// старая версия ниже
// function scssTask(){
//   return src('app/scss/**/*.scss', { sourcemaps: true })
//     .pipe(sass())
//     .pipe(dest('dist', { sourcemaps: '.' }));
// }
function scssTask() {
  return src("app/scss/**/*.scss").pipe(sass()).pipe(dest("dist/style"));
}

// JavaScript Task
function jsTask() {
  return src("app/js/*.js").pipe(concat("script.js")).pipe(dest("dist/"));
}

// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: ".",
    },
    notify: false,
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("*.html", browsersyncReload);
  watch(
    ["app/scss/**/*.scss", "app/js/**/*.js"],
    { interval: 1000, usePolling: true },
    series(scssTask, jsTask, browsersyncReload)
  );
}

// Default Gulp task
exports.default = series(scssTask, jsTask, browsersyncServe, watchTask);
