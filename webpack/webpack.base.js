const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const autoprefixer = require('autoprefixer')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

const resolve = {
  modules: [
    "node_modules",
    path.resolve(__dirname, "node_modules")
  ],
  alias: {
    frontend: path.resolve(__dirname, '../app/frontend')
  },
  extensions: ['.js', '.scss', '.sass', '.css']
}


const entry = {
  application: './frontend/js/application',
  frontend: './frontend/css/frontend'
}

const output = {
  path: path.resolve('public/packs/'),
  publicPath: 'packs/',
  filename: 'js/[name]-[hash:8].js',
  chunkFilename: 'js/chunks/[name]-[hash:8].js',
  pathinfo: true  
}

const jsRules = {
  test: /\.js$/,
  exclude: [
    path.resolve(__dirname, "node_modules")
  ],
  use: [
    {
      loader: 'babel-loader',
      options: {
        cacheDirectory: path.join('tmp/webpack', 'babel-loader-node-modules'),
        cacheCompression: false,
        compact: false
      }
    }
  ]
}

const scssRules = {
  test: /\.scss$/,
  use: [
    MiniCssExtractPlugin.loader,
    {
      loader: "css-loader",
      options: {
        sourceMap: true
      }
    },
    {
      loader: "postcss-loader",
      options: {
        sourceMap: true,
        plugins: [
          autoprefixer()
        ]
      }
    },
    {
        loader: "sass-loader",
        options: {
          sourceMap: true
        }
    }
  ]
}

const webpackModule = {
  rules: [
    jsRules,
    scssRules
  ]
}

const plugins = [
  //
  new ManifestPlugin({
    integrity: true,
    entrypoints: true,
    writeToDisk: true
  }),
  //
  new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // all options are optional
    filename: 'css/[name]-[hash:8].css',
    chunkFilename: 'css/[name]-[hash:8].css',
    ignoreOrder: false, // Enable to remove warnings about conflicting order
  })
]

module.exports = {
  context: path.resolve(__dirname, "../app"),
  entry,
  module: webpackModule,
  output,
  plugins,
  resolve,
  devtool: "source-map"
};