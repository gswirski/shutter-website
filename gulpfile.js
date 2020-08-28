var gulp = require('gulp')
var responsive = require('gulp-responsive')
 
gulp.task('default', function () {
  return gulp
    .src([
      'docs/assets/img/theme/*.{png,jpg}',
      'docs/assets/img/screenshots/max/*.png'
    ])
    .pipe(
      responsive({
        '**/a7RII-0181.jpg': {
          width: 2048,
          quality: 70,
          rename: 'cover.jpg'
        },
        '**/ss*.png': {
          width: 621
        },
      })
    )
    .pipe(gulp.dest('dist'))
})
