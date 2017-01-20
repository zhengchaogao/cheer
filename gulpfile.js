var path = require('path');
var fs = require('fs');
var rootPath = path.resolve(__dirname, './');
var srcPath = path.resolve(__dirname, './src');
var configPath = path.resolve(__dirname, './config');

var gulp = require('gulp');
var rename = require('gulp-rename');
var htmlRepalce = require('gulp-html-replace');
var webpack = require('webpack');
var devServer = require('webpack-dev-server');
var webpackDevConfig = require(path.resolve(configPath, './webpack.dev.config.es'));
var webpackBuildConfig = require(path.resolve(configPath, './webpack.build.config.es'));
var opn = require('opn');

// 设置当前项目的名称、版本
var projectName = rootPath.match(/[^\\]+$/);
var version = '';
try {
  version = fs.readFileSync(path.resolve(rootPath, '.git/HEAD')).toString().trim().match(/\d+\.\d+\.\d+$/)[0] || '';
} catch(e) {
  console.log('\n\033[31mVersion Error! \033[0mPls check your branch name format(daily/x.x.x)!\n');
}
/************* 以下是本地开发任务 *******************/

gulp.task('webpack-dev', function () {
  var port = 3007;
  // webpack-dev 服务器
  var config = Object.create(webpackDevConfig);
  // 添加entry点
  config.entry.app.unshift('webpack-dev-server/client?http://localhost:'+ port +'/', "webpack/hot/dev-server");
  var compiler = webpack(config);
  var server = new devServer(compiler, {
    hot: true,
    contentBase: srcPath,
    publicPath: '/dist/',
    clientLogLevel: 'none',
    stats: {
      colors: true,
      chunks: false
    }
  });
  server.listen(port, '0.0.0.0', function() {});
  opn('http://browser-local-test.taobao.com:'+ port +'/');
});

// html
gulp.task('html-dev', function () {

  gulp.src(path.resolve(srcPath, './index.html'))
      .pipe(htmlRepalce({
        js: ['/dist/index.js']
      }, {
        keepBlockTags: true
      }))
      .pipe(gulp.dest(srcPath));
});

gulp.task('dev', ['webpack-dev', 'html-dev'], function() {
  console.log('Manually change hosts \033[31m127.0.0.1 \033[0mto \033[31mbrowser-local-test.taobao.com\033[0m');
});




/**************** 以下是发布任务 **************/

// webpack处理js css
gulp.task('webpack-build', function () {
  process.env.NODE_ENV = 'production';
  webpack(webpackBuildConfig, function(err, stats) {
    console.log(stats.toString());
  });
});
// html
gulp.task('html-build', function () {
  var env = process.argv[3];
  var host = env !== '-o' ? '//g-assets.daily.taobao.net/ali-page' : '//g.alicdn.com/ali-page';
  gulp.src(path.resolve(srcPath, './index.html'))
      .pipe(htmlRepalce({
        css: `${host}/${projectName}/${version}/index.css`,
        js: ['//g.alicdn.com/browser/lib.common/0.1.2/vue/vue.2.1.8.min.js', `${host}/${projectName}/${version}/index.js`],
      }))
      .pipe(rename('index.xtpl'))
      .pipe(gulp.dest(rootPath));
});

gulp.task('build', ['webpack-build', 'html-build']);