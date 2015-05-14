Installing Gulp
---------------

* In project directory, run `npm init`
* Install gulp, gulp-react and gulp-concat
  
  ```sh
  npm install --save gulp gulp-react gulp-concat
  ```

* Add `gulpfile.js` to the project root

  ```js
  var gulp = require("gulp");
  var react = require("gulp-react");
  var concat = require("gulp-concat");

  gulp.task("default", function() {
    return gulp.src("src/**")
      .pipe(react())
      .pipe(concat("application.js"))
      .pipe(gulp.dest("./"));
  });
  ```

* Run `gulp`

  ```sh
  % gulp
  [19:21:31] Using gulpfile ~/workspace/learn-and-understand-reactjs/thumbnail-gulp/gulpfile.js
  [19:21:31] Starting 'default'...
  [19:21:31] Finished 'default' after 61 ms
  ```

Installing Browserify
--------------------

* In project directory on the command line, run:

  ```sh
  npm install --save browserify reactify vinyl-source-stream watchify gulp-util
  ```

* In gulpfile.js:

  ```js
  var gulp = require("gulp");
  var gutil = require("gulp-util");
  var source = require("vinyl-source-stream");
  var browserify = require("browserify");
  var watchify = require("watchify");
  var reactify = require("reactify");

  gulp.task("default", function() {
    var bundler = watchify(browserify({
      entries: ["./src/app.jsx"],
      transform: [reactify],
      extensions: [".jsx"],
      debug: true,
      cache: {},
      packageCache: {},
      fullPaths: true
    }))

    function build(file) {
      if (file) gutil.log("Recompiling " + file);
      return bundler
        .bundle()
        .on("error", gutil.log.bind(gutil, "Browserfiy Error"))
        .pipe(source("main.js"))
        .pipe(gulp.dest("./"));
    };
    build();
    bundler.on("update", build);
  });
  ```

Installing React
----------------

* Run at root:

  ```sh
  npm install --save react
  ```

* Remove react script tag from index.html
* In every .jsx page, at the top, add:

  ```js
  var React = require("react");
  ```



