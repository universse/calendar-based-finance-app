const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const envFile = require('node-env-file')
const paths = require('./paths')

process.env.NODE_ENV = 'development'

envFile(paths.devEnv)

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    paths.mainJs
  ],
  plugins: [
    new HtmlWebpackPlugin({
      title: 'React Finance',
      inject: true,
      template: paths.html
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
        'API_KEY': JSON.stringify(process.env.API_KEY),
        'AUTH_DOMAIN': JSON.stringify(process.env.AUTH_DOMAIN),
        'DATABASE_URL': JSON.stringify(process.env.DATABASE_URL),
        'STORAGE_BUCKET': JSON.stringify(process.env.STORAGE_BUCKET),
        'MESSAGING_SENDER_ID': JSON.stringify(process.env.MESSAGING_SENDER_ID)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ExtractTextPlugin({
      filename: 'main.css',
      disable: false,
      allChunks: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({
          loader: [
            {
              loader: 'css-loader'
            },
            {
              loader: 'postcss-loader',
              options: {
                config: paths.postcssConfig
              }
            },
            {
              loader: 'sass-loader'
            }
          ]
        })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({loader: 'css-loader'})
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.(eot|svg|ttf|woff(2)?)(\?v=\d+\.\d+\.\d+)?/,
        loader: 'url-loader'
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      paths.api,
      paths.components,
      paths.firebase,
      paths.redux,
      paths.styledComponents
    ],
    alias: {
      applicationStyle: paths.mainScss
    }
  },
  output: {
    filename: 'index.js',
    path: paths.build
  },
  devServer: {
    historyApiFallback: true
  }
}
