var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./app/dist/index.jsx",
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader:'babel-loader',
        query:{
          presets: ['es2015', 'react', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties','transform-decorators-legacy']
        }
      }
    ]
  },
  output: {
    path: __dirname + "/app/js",
    filename: "index.min.js",
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};﻿