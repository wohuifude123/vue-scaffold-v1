/**
 * 功能：webpack 开发环境
 * 作者：Abbott.liu
 * 时间：2018年7月23日
 */

const path = require('path');
const merge = require('webpack-merge');
const base = require('./webpack.base.js');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge( base.baseConfig, {
  output: {
    filename: '[name].bundle.js',
    path: __dirname + 'service/dist', //打包路径
    publicPath:'dist/', // 用于处理静态资源引用地址问题
  },
  devtool: 'source-map',
  devServer: {
    host: '127.0.0.1',
    compress: false,
    port: 6600,
    contentBase: './server',
    hot: true
  },
  plugins: [
    new CleanWebpackPlugin([ __dirname +'service/dist' ]),
    // new HtmlWebpackPlugin({
    //   title: 'Output Management'
    // }),
    new VueLoaderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});



