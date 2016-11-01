/**
 * @license Created by felix on 16-11-1.
 * @email   307253927@qq.com
 */
'use strict';
var webpackMerge = require('webpack-merge'); // used to merge webpack configs
var commonConfig = require('./webpack.common.js');


module.exports = webpackMerge(commonConfig, {
  debug    : true,
  devtool  : 'source-map',
  metadata : {isDevServer: true},
  devServer: {
    historyApiFallback: true,
    host              : '0.0.0.0',
    port              : '8080'
  },
  node     : {
    global        : 'window',
    crypto        : 'empty',
    process       : true,
    module        : false,
    clearImmediate: false,
    setImmediate  : false
  }
});