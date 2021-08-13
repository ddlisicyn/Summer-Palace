const gulp = require('gulp');

gulp.task('autoprefixer', () => {
    const autoprefixer = require('autoprefixer');
    const postcss = require('gulp-postcss');
  
    return gulp.src('*.css')
      .pipe(postcss([ autoprefixer() ]))
      .pipe(gulp.dest('dist/'))
  })