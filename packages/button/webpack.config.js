const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

const dependencies = require('./package.json').dependencies;
const shared = {
  ...dependencies,
  react: {singleton: true},
  'react-dom': {singleton: true},
};

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  resolve: { extensions: ['*', '.js', '.jsx'] },
  output: {
    path:  path.resolve(__dirname, 'dist/'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/'),
      publicPath: 'http://localhost:3001/',
    },
    port: 3001,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/env']
            }
          },
          {
            loader: '@linaria/webpack-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: process.env.NODE_ENV !== 'production'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'Showroom Button',
      filename: './index.html',
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new ModuleFederationPlugin({
      name: 'showroom_button',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './lib/index.js'
      },
      shared
    })
  ]
};
