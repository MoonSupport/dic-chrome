const path = require('path')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

const mode = process.env.NODE_ENV === 'production' ? 'production' : 'development'

const config = {
  devtool: 'inline-source-map',
  mode,
  entry: {
    background: './background.js',
    contentscript: './contentscript.js',
    options_script: './lib/options_script.js',
    config: './config.js',
    popup: './popup.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-classes']
          }
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin({
        output:['dist']
    }),
    new CopyWebpackPlugin({
        patterns: [
            {
                from: 'images/*.png',
            },
            {
                from: 'manifest.json',
            },
            {
                from: '*.html',
            },
            {
              from:'node_modules/jquery/dist/jquery.min.js',
            },
            {
              from:'node_modules/xregexp/xregexp-all.js'
            },
            {
              from :'style.css',
            }
        ]
    })
    ]
}

module.exports = config
