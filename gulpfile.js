const gulp = require("gulp");
const sass = require("gulp-sass");
const autoPreFixer = require("gulp-autoprefixer");
const browser = require("browser-sync");
const plumber = require("gulp-plumber");

// BrowserSync
gulp.task("server", function() {
  browser({
    server: {
      baseDir: "./"
    }
  });
});

// LiveReload
gulp.task("bsReload", function() {
  browser.reload();
});

// Sassのコンパイル
gulp.task("sass", function() {
  gulp.src("./assets/scss/*scss")
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoPreFixer())
    .pipe(gulp.dest("./assets/css"))
    .pipe(browser.reload({stream:true}))
});

// watch
gulp.task("default", ['server'], function() {
  gulp.watch("./assets/scss/*.scss", ["sass"]);
  gulp.watch("./index.html", ["bsReload"]);
});