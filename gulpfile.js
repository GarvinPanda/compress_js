/**
 * 用来压缩合并js文件
 * @autor xiong
 */
/** 导入库 */
var gulp=require('gulp'),            //gulp
    concat=require('gulp-concat'),   //文件合并
    uglify=require('gulp-uglify'),   //js压缩
    rename=require('gulp-rename'),   //文件重命名
    notify=require('gulp-notify'),   //提示
    gutil = require('gulp-util'),    //日志
    babel = require("gulp-babel");   //es6转es5
/** 执行任务 */
gulp.task('default',function(){
    gulp.start('minifyjs');
});
/** 压缩合并js */
gulp.task('minifyjs',function(){
    return gulp.src(['./src/a.js','./src/b.js'])  //选择合并的多个JS
        .pipe(babel())      //es6转换
        .pipe(concat('ab.js'))      //合并的名字
       // .pipe(gulp.dest('dist/js'))        //输出单个
        .pipe(rename({suffix:'.min'}))     //重命名
        .pipe(uglify())                    //压缩
        .on('error', function (err) {
            gutil.log(gutil.colors.red('[Error]'), err.toString()); //报错日志
        })
        .pipe(gulp.dest('dist'))               //输出 
        .pipe(notify({message:"js task is ok"}));    //提示
 });