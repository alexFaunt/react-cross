/**
 * Webpack config adapts based on BUILD_NUMBER and WATCH env variables.
 */

const webpack = require('webpack')
const path = require('path')

const config = {
  target: 'web',
  entry: {
    index: './index.web.jsx'
  },
  output: {
    path: path.join(__dirname, './web/build'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: [/node_modules/]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules'
    ],
    extensions: ['.js', '.jsx']
  },
  // watch: !!process.env.WATCH,
  devtool: 'eval-source-map',
  plugins: [
    // new webpack.IgnorePlugin(/native/)
  ]
}

module.exports = config
