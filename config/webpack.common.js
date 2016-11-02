/**
 * @license Created by felix on 16-11-1.
 * @email   307253927@qq.com
 */
'use strict';
var path               = require('path');
var CopyWebpackPlugin  = require('copy-webpack-plugin');
var HtmlWebpackPlugin  = require('html-webpack-plugin');
var CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');

var METADATA = {
  base       : '/',
  title      : 'Vue-2.0',
  description: '',
  keywords   : ''
};

module.exports = {
  metadata     : METADATA,
  entry        : {
    main  : ['./src/main.js'],
    vendor: './src/vendor.js'
  },
  output       : {
    path             : 'dist',
    filename         : '[name].build.[hash].js',
    sourceMapFilename: '[name].bundle.[hash].map'
  },
  resolve      : {
    alias: {
      'vue': 'vue/dist/vue.min.js' //解决 import vue from  指向的是dist/vue.common.js 而不是我们想要的dist/vue.js
    }
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  module       : {
    loaders: [
      {
        test  : /\.vue$/,
        loader: 'vue'
      },
      {
        test   : /\.js$/,
        loader : 'babel',
        exclude: /node_modules/
      },
      {
        test  : /\.(png|jpg|gif|svg)$/,
        loader: 'file',
        query : {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  
  plugins: [
    new CommonsChunkPlugin({
      name: ['vendor']
    }),
    new CopyWebpackPlugin([
      {context: 'src', from: 'libs/**/*', to: ''},
      {context: 'src', from: 'css/**/*', to: ''},
      {context: 'src', from: 'images/**/*', to: ''},
      {context: 'src', from: '*.html', to: ''},
      {context: 'src', from: '*.ico', to: ''}
    ], {
      ignore        : [
        // Doesn't copy any files with a txt extension
        'index.html',
        '*.txt'
      ],
      // By default, we only copy modified files during
      // a watch or webpack-dev-server build. Setting this
      // to `true` copies all files.
      copyUnmodified: true
    }),
    new HtmlWebpackPlugin({
      template      : 'src/index.html',
      // chunks        : ['main', 'vendor'],
      chunksSortMode: 'dependency'
    })
  ]
};
