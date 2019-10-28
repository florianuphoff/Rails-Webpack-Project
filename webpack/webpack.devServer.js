const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    compress: true,
    port: 9000,
    proxy: {
      '/api': { // string to look for proxying requests to api
        target: 'http://localhost:3000', // Path of your rails api server
      },
    },
    disableHostCheck: true,
    host: 'localhost',
    inline: true,
    https: false,
    stats: {
      all: false,
      modules: true,
      maxModules: 0,
      errors: true,
      warnings: true,
      moduleTrace: true,
      errorDetails: true
    },
    hot: false,
    publicPath: 'public/packs',
    overlay: true,
    writeToDisk: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
})