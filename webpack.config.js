var webpack = require('webpack');

var config = {
  context: __dirname + '/app',
  entry: './index.js',

  output: {
    filename: 'bundle.js',
    path: __dirname
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  },

  plugins: [
    //new webpack.optimize.CommonsChunkPlugin({
    //  name: ['react', 'react-dom', 'jquery'],
    //  filename: 'common.bundle.js',
    //  minChunks: Infinity
    //}),
    //
    //new webpack.optimize.UglifyJsPlugin({
    //  compress: {
    //    warnings: false
    //  }
    //})
  ]

};

module.exports = config;