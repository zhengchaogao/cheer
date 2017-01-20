var path = require('path');
var webpack = require('webpack');
module.exports = {
  entry: {
    app: [path.resolve(__dirname, '../src/main.es')]
  },
  output: {
    path: path.resolve(__dirname, '../'),
    publicPath: '/dist/',
    filename: 'index.js'
  },
  module: {
    loaders: [
      {test: /\.vue$/, loader: 'vue!eslint'},
      {test: /\.es$/, loader: 'babel!eslint', exclude: /node_modules/},
      {test: /\.less$/, loader: 'style!css!less?sourceMap'},
      {test: /\.(png|jpg)$/, loader: 'url-loader'}
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.js'
    }
  },
  babel: {
    presets: ['es2015']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devtool: '#source-map',
  watch: true
}