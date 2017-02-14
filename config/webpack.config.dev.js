const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
var ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const envFile = require('node-env-file')
const paths = require('./paths')

process.env.NODE_ENV = 'development'

envFile(paths.devEnv)

module.exports = {
  devtool: 'eval',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    paths.mainJs
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'React Finance',
      inject: true,
      template: paths.html
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
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
        use: ExtractTextPlugin.extract({
          use: [
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
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              config: paths.postcssConfig
            }
          }
        ]
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
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'svg-react-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    modules: [
      'node_modules',
      paths.api,
      paths.components,
      paths.firebase,
      paths.icons,
      paths.redux,
      paths.styledComponents
    ],
    alias: {}
  },
  output: {
    filename: 'index.js',
    path: paths.build
  },
  devServer: {
    historyApiFallback: true
  }
}
