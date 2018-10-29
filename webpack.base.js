var path = require('path');
var webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const devMode = process.env.NODE_ENV !== 'production';

console.log( 'devMode === ', devMode );

let baseConfig = {
  resolve: {
    // 定义别名
    alias: {
    },
    // 告诉webpack解析模块时应该搜索哪些目录
    modules: [path.resolve( __dirname, 'src' ), 'node_modules'],
    extensions: ['.js', '.vue', '.scss']
  },
  entry: {
    app: path.resolve( __dirname, 'src/pages/home/main.js' ),
    capacity: path.resolve( __dirname, 'src/pages/capacity/main.js' ),
    technology: path.resolve( __dirname, 'src/pages/technology/main.js' ),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          "vue-style-loader",
          "css-loader"
        ]
      },
      // sass文件的处理
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.vue$/,
        exclude:/node_modules/,
        loader: 'vue-loader', /* 原来的'vue'改成'vue-loader' */
        options: {
          // vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
      	test: /\.(png|svg|jpg|gif)$/,
      	loader: 'file-loader',
        options: {
          name: '[path][name].[ext]', //path为相对于context的路径
          context:'src'
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader' ],
        exclude:path.resolve(__dirname,'/node_modules'),
        include:path.resolve(__dirname,'src')
      }
    ]
  }
};

exports.baseConfig = baseConfig;

// if (process.env.NODE_ENV === 'production') {
//   module.exports.devtool = '#source-map'
//   // http://vue-loader.vuejs.org/en/workflow/production.html
//   module.exports.plugins = (module.exports.plugins || []).concat([
//     //定义当前生产环境为node环境
//     new webpack.DefinePlugin({
//       'process.env':{
//         NODE_ENV:'"production"'
//       }
//     }),
//
//
//     new webpack.LoaderOptionsPlugin({
//       minimize: true
//     })
//   ])
// }
