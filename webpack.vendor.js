/**
 * 功能：webpack 性能优化Dll技术
 * 作者：Abbott.liu
 * 时间：2018年7月23日
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const library = '[name]_[chunkhash:8]';


const clean_path = NODE_ENV === 'production'? 'public/dist' : 'service/dist'

// the path(s) that should be cleaned
let pathsToClean = [
    'dist',
    'build'
]

// the clean options to use
let cleanOptions = {
    root:     '', //清理的路径
    exclude:  ['shared.js'],
    // Write logs to console.
    verbose:  true,
    // Use boolean "true" to test/emulate delete. (will not remove files). 模拟删除
    dry:      false
}

module.exports = {
  module: {
    rules: [],
    plugins: [
      new webpack.DllReferencePlugin({
        context: __dirname,
        manifest: require('./manifest.json'),
        name: './my-dll.js',
        scope: 'xyz',
        sourceType: 'commonjs2'
      })
    ]
  }

};




