const path = require('path'),
webpack = require('webpack'),
CleanWebpackPlugin = require('clean-webpack-plugin'),
HtmlWebpackPlugin = require('html-webpack-plugin'),
ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractPlugin = new ExtractTextPlugin({ filename: './assets/css/app.css' });

const config = {

context: path.resolve(__dirname, 'src'),

entry: {
app: './app.js'
},

output: {
  path: path.resolve(__dirname, 'dist'),
  filename: './assets/js/[name].bundle.js'
},

module: {
rules: [

  { test: /\.js$/, include: /src/, exclude: /node_modules/, use: { loader: "babel-loader", options: { presets: ['env'] } } },
  { test: /\.html$/, use: ['html-loader'] },
  {
    test: /\.scss$/,
    include: [path.resolve(__dirname, 'src', 'assets', 'scss')],
    use: extractPlugin.extract({
      use: [
        {
          loader: 'css-loader',
          options: {
            sourceMap: true
          }
        },
        {
          loader: 'sass-loader',
          options: {
            sourceMap: true
          }
        }
      ],
      fallback: 'style-loader'
    })
  },
  { test: /\.(jpg|png|gif|svg)$/, use: [ { loader: 'file-loader', options: { name: '[name].[ext]', outputPath: './assets/images/' } } ] },
  { test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader'] }

]
},

plugins: [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    template: 'index.html'
  }),
  extractPlugin
],

devServer: {
  contentBase: path.resolve(__dirname, "./dist/assets/images"),
  compress: true,
  port: 5000,
  stats: 'errors-only',
  open: true
},

devtool: 'inline-source-map'

};

module.exports = config;