const path = require('path')

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
        loader: 'style-loader!css-loader!less-loader'
      }
    ]
  }
}
