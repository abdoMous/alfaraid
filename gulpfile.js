var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');
var reload = browserSync.reload;

gulp.task('default', function() {
    // place code for your default task here
});
gulp.task('sass', function () {
    gulp.src('./app/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/style/css'))
        .pipe(reload({ stream:true }));
});
// watch files for changes and reload
gulp.task('serve', function() {
    browserSync({
        server: {
            baseDir: 'app'
        }
    });
    gulp.watch('./app/scss/*.scss', ['sass']);
    gulp.watch(['*.html', 'styles/**/*.css', 'scripts/**/*.js'], {cwd: 'app'}, reload);
});