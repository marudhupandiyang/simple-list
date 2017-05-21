
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
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
            test: /\.scss$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }
            ]
      }
    ]
  },
  devServer: {
    hot: true,
    historyApiFallback: true
  },
  plugins: [new HtmlWebpackPlugin()]
};


module.exports = config;
