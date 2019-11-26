const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require("gulp-autoprefixer");
const concat = require('gulp-concat');



sass.compiler = require('node-sass');
gulp.task('sass',() => {
    return gulp.src('./src/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
        cascade:false,
    }))
    .pipe(gulp.dest('./build/css'))
});


gulp.task('js-script', () =>{
    return gulp.src('./src/js/*.js')
    .pipe(concat('script.js'))
    .pipe(gulp.dest('./build/js'));
});





gulp.task('default', () => {
    gulp.watch('./src/scss/*.scss', gulp.series(["sass"]));
    gulp.watch('./src/js/*.js', gulp.series(["js-script"]));
    
});
