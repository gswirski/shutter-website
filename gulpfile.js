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
        '**/cover.jpg': {
          width: 2048,
          quality: 70,
        },
        '**/ss*.png': [
          {
            width: 621
          },
          {
            width: 621,
            format: 'webp'
          },
        ]
      })
    )
    .pipe(gulp.dest('dist'))
})
