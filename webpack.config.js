var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
const isProduction = process.env.NODE_ENV === 'production';
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main-bundle.js'
  },
  devServer:{
    contentBase: path.resolve(__dirname, 'dist')
  },
  module: {
    rules:[
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use:{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.s?(c|a)ss$/,
        use: [
          isProduction ? MiniCssExtractPlugin.loader :          
          {loader: 'style-loader', options: {sourceMap: true}},
          {loader: 'css-loader', options: {sourceMap: isProduction}},          
          {loader: 'sass-loader', options: {sourceMap: isProduction}},
          {loader: 'postcss-loader', options: {sourceMap: isProduction}},
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'url-loader?limit=10000',
          'img-loader'
        ]
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};