/**
 * 功能：webpack 生产环境
 * 作者：Abbott.liu
 * 时间：2018年7月23日
 */

const webpack = require('webpack');
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');

module.exports = merge( base.baseConfig, {
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'public/dist'),
    publicPath: 'dist/',
  },
  plugins: [
    new VueLoaderPlugin()
  ]
});
