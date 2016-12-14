var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src/client/public');
var APP_DIR = path.resolve(__dirname, 'src/client/app');
var APP_DIR2 = path.resolve(__dirname, 'src/js');
var APP_DIR3 = path.resolve(__dirname, 'src/js2');

var config = {
  entry: APP_DIR3 + '/index.js',
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module : {
    loaders : [
      {
        test : /\.js?/,
        include : APP_DIR3,
        loader : 'babel'
      }
    ]
  }
};

module.exports = config;
