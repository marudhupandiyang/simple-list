
const projectConfig = require('./project.config')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = {
  entry: './examples/index.js',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: projectConfig.MODULE_NAME + '.js'
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, use: 'babel-loader'}
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin()]
};


module.exports = config;
