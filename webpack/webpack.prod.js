const merge = require('webpack-merge')
const baseConfig = require('./webpack.base')
const SCCWebpackPlugin = require('stylesheet-code-quality-webpack-plugin')

const prodConfig = {
  mode: 'production',
  devtool: 'none',
  plugins: [
    new SCCWebpackPlugin({
      copyTo: '/public/dashboard',
      exportLocation: '/dashboard/'
    })
  ]
}

module.exports = merge(baseConfig, prodConfig)