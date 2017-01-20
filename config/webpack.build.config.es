var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/main.es')]
  },
  output: {
    path: path.resolve(__dirname, '../'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue!eslint'},
      {test: /\.es$/, loader: 'babel!eslint', exclude: /node_modules/},
      {test: /\.less$/, loader: 'style!css!less'},
      {test: /\.(png|jpg)$/, loader: 'url-loader'}
    ]
  },
  vue: {
    loaders: {
      less: ExtractTextPlugin.extract('vue-style', 'css!less')
    }
  },
  babel: {
    presets: ['es2015']
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new ExtractTextPlugin('index.less'),
    new webpack.optimize.DedupePlugin()
  ],
  externals: {
    vue: 'Vue',
    vuex: 'Vuex',
    lib: 'lib'
  },
  color: true
}