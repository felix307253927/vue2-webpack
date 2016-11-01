/**
 * @license Created by felix on 16-11-1.
 * @email   307253927@qq.com
 */
'use strict';
var webpack      = require('webpack');
var webpackMerge = require('webpack-merge'); // used to merge webpack configs
var commonConfig = require('./webpack.common.js');


module.exports = webpackMerge(commonConfig, {
  debug   : false,
  devtool : 'source-map',
  metadata: {isDevServer: false},
  plugins : [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin()
  ],
  node    : {
    global        : 'window',
    crypto        : 'empty',
    process       : false,
    module        : false,
    clearImmediate: false,
    setImmediate  : false
  }
});