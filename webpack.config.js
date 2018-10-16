const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: 'source-map',
  entry: {
    app: ['./src/app/index.js', './src/styles/main.scss']
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin()
    ]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: [
          'html-loader?attrs=false',
          {
            loader: 'pug-html-loader',
            options: {
              pretty: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: './css/'
            }
          },
          "sass-loader" // compiles Sass to CSS, using Node Sass by default
        ]
      }      
    ]
  },  
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, './dist'),
    //libraryTarget: 'umd',
    //umdNamedDefine: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/templates/index.pug",
      filename: "index.html",
      inject: false
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
