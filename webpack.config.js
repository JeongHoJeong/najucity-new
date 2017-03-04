const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './client/index.jsx',
  output: {
    path: path.resolve('./dist'),
    filename: 'bundle.js'
  },
  resolve: {
    modules: ['node_modules', process.env.NODE_PATH]
  },
  resolveLoader: {
    modules: ['node_modules', process.env.NODE_PATH]
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      },
      {
        test: /\.less$/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'less-loader']
        })
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      template: './client/index.html'
    })
  ]
}
