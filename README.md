### 功能介绍
- 合并并且压缩`js`
- `src`中放入需要压缩的js代码
- `dist`中生成压缩好的代码

### 安装
- 基于`node`
- npm
    
        babel-core
        babel-preset-es2015
        gulp
        gulp-babel
        gulp-clean
        gulp-concat
        gulp-jshint
        gulp-notify
        gulp-rename
        gulp-uglify

- 注意版本问题

    `gulp-babel` 尽可能使用`@7`


### 使用
- 替换`gulpfile.js`中的需要合并压缩的`js`文件,

        可以修改自己的文件名

        可以单个文件输出

- npm install

        安装依赖库

- 运行

        gulp
