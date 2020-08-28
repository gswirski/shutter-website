var gulp = require('gulp')
var responsive = require('gulp-responsive')
 
gulp.task('default', function () {
  return gulp
    .src('**/*.{png,jpg}')
    .pipe(
      responsive({
        '**/*': {
          width: 2048,
          quality: 70,
          rename: 'cover.jpg'
        }
      })
    )
    .pipe(gulp.dest('dist'))
})
