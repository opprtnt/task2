var webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;




const filename = (ext) => isDev ? `[name].${ext}` : `[name].[contenthash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    "main": './index.js',
  },

  output: {
    filename: `${filename('js')}`,
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: 'static/[hash][ext][query]'
  },
  devServer: {
    historyApiFallback: true,
    open: true,
    compress: true,
    hot: true,
    port: 3000
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.pug',
      inject: true,
      chunks: ['main']
    }),
    new HTMLWebpackPlugin({
      template: './find-room-page/find-room-page.pug',
      filename: 'static/find-room-page.html',
    }),
    new MiniCssExtractPlugin({ filename: `${filename('css')}` }),
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery",
      "window.jQuery": "jquery'",
      "window.$": "jquery"
    })
  ],
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: ['pug-loader'],

      },

      {
        test: /\.(s[ac]ss|css)$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", 'sass-loader', "postcss-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'image/[hash][ext][query]'
        }

      },
      {
        test: /\.m?js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[hash][ext][query]',
        }
      }


    ]
  }
};