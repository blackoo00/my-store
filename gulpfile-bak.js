var path = require('path');
var gulp = require('gulp');
var concat = require('gulp-concat');//合并
var uglify = require('gulp-uglify');//压缩JS
var sass = require('gulp-sass-china');
var watchPath = require('gulp-watch-path');//监听变动的路径
var rename = require('gulp-rename');
var postcss = require('gulp-postcss');//处理CSS的平台
var autoprefixer = require('autoprefixer');//POSTCSS上的一个处理后缀的插件
var nano = require('gulp-cssnano');//执行各种优化，删除空白和注释，并且压缩代码
var yargs = require('yargs').argv;
var browserSync = require('browser-sync');//浏览器
var tap = require('gulp-tap');
var browserify = require('gulp-browserify');
var htmlmin = require('gulp-htmlmin');
var webpack = require('gulp-webpack');

var option = {basse: 'app'};
var dist = __dirname + '/dist';

gulp.task('html',function(){
    var options = {
        collapseWhitespace:true,//清除空格
        collapseBooleanAttributes:true,//省略布尔属性的值，比如：<input checked="checked"/>,那么设置这个属性后，就会变成 <input checked/>;
        removeComments:true,//清除html中注释的部分
        removeEmptyAttributes:true,//清除所有的空属性
        removeScriptTypeAttributes:true,//清除所有script标签中的type="text/javascript"属性
        removeStyleLinkTypeAttributes:true,//清楚所有Link标签上的type属性
        minifyJS:true,//压缩html中的javascript代码
        minifyCSS:true//压缩html中的css代码
    };
    gulp.src('./app/index.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest(dist))
    .pipe(browserSync.reload({stream: true}));
})
//解析SASS
gulp.task('sass',function(){
 gulp.src('app/css/style.scss',option)
     .pipe(sass().on('error',function(e){
         console.error(e.message);
         this.emit('end');
     }))
     .pipe(postcss([autoprefixer(['iOS >= 7', 'Android >= 4.1'])]))
     .pipe(nano({
         zindex: false,
         autoprefixer: false
     }))
     .pipe(gulp.dest(dist+'/css'))
     .pipe(browserSync.reload({stream: true}));
});

gulp.task('extend:css',function(){
    gulp.src('app/css/*.css')
    .pipe(gulp.dest(dist+'/css'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('browserify',function(){
    gulp.src('./app/js/main.js')
    // .pipe(browserify({
    //     transform: 'reactify',
    // }))
    .pipe(webpack({
        entry: './app/js/main.js',
        output: {
            filename: 'main.js',
        },
        // watch: true,
        module:{
            loaders: [
              { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader?presets[]=es2015&presets[]=react' }
            ]
        }
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('extend:js',function(){
    gulp.src('app/js/extend/*.js')
    .pipe(gulp.dest(dist+'/js'))
    .pipe(browserSync.reload({stream: true}));
});

gulp.task('img',function(){
    gulp.src('app/img/*.?(png|jpg|gif)', option)
        .pipe(gulp.dest(dist + '/img'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('watch',function(){
    gulp.watch('./app/**/*.js',['browserify']);
    gulp.watch('./app/css/style.scss',['sass']);
    gulp.watch('./app/js/**/*.scss',['sass']);
    gulp.watch('./app/css/*.scss',['sass']);
    gulp.watch('./app/css/*.css',['extend:css']);
    gulp.watch('./app/js/extend/*.js',['extend:js']);
    gulp.watch('./app/img/*.?(png|jpg|gif)',['img']);
    gulp.watch('./app/index.html',['html']);
});

gulp.task('serve', ['watch'], function() {
    yargs.p = yargs.p || 8080;
    browserSync.init({
        server: {
            baseDir: "./dist"
        },
        ui: {
            port: yargs.p + 1,
            weinre: {
                port: yargs.p + 2
            }
        },
        port: yargs.p,
        // startPath: '/dist'
    });
});

gulp.task('default',['serve']);

//拼接HTML
// gulp.task('build:example:html', function (){
//     gulp.src('src/example/index.html', option)
//     	//接入 stream 来获取每个文件的数据
//         // .pipe(tap(function (file){
//         //     var dir = path.dirname(file.path);
//         //     var contents = file.contents.toString();
//         //     contents = contents.replace(/<link\s+rel="import"\s+href="(.*)">/gi, function (match, $1){
//         //         var filename = path.join(dir, $1);
//         //         var id = path.basename(filename, '.html');
//         //         var content = fs.readFileSync(filename, 'utf-8');
//         //         return '<script type="text/html" id="tpl_'+ id +'">\n'+ content +'\n</script>';
//         //     });
//         //     file.contents = new Buffer(contents);
//         // }))
//         .pipe(gulp.dest(dist+'/example'))
//         .pipe(browserSync.reload({stream: true}));
// });

// gulp.task('watch',function(){
// 	gulp.watch('app/js/*.js',function(event){
// 		var paths = watchPath(event, 'script', 'newScript');//只监听改变了的JS
//         gulp.src(paths.srcPath)//paths.srcPath为变动的JS路径
//         // .pipe(concat('main.js')) //合并js到main.js
//         .pipe(uglify())//压缩
//         .pipe(rename({suffix: '.min'}))//重命名
//         .pipe(gulp.dest(dist+'/example'))//paths.distDir为目录文件
//         .pipe(browserSync.reload({stream: true}));
// 	});
// 	gulp.watch('src/example/example.scss',['sass']);
// 	// gulp.watch('src/example/index.html',['build:example:html']);
// });

// gulp.task('serve', ['watch'], function() {
//     yargs.p = yargs.p || 8080;
//     browserSync.init({
//         server: {
//             baseDir: "./dist"
//         },
//         ui: {
//             port: yargs.p + 1,
//             weinre: {
//                 port: yargs.p + 2
//             }
//         },
//         port: yargs.p,
//         startPath: '/example'
//     });
// });

// gulp.task('default',['serve']);
