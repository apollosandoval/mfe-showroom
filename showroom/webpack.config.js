const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {ModuleFederationPlugin} = require('webpack').container;

const dependencies = require('./package.json').dependencies;
const shared = {
  ...dependencies,
  react: {singleton: true, version: dependencies.react},
  'react-dom': {singleton: true, version: dependencies["react-dom"]},
};

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  resolve: {extensions: ['*', '.js', '.jsx']},
  output: {
    path: path.resolve(__dirname, 'dist/'),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'public/'),
      publicPath: 'http://localhost:3000/',
    },
    port: 3000,
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
      title: 'Showroom MFE',
      filename: './index.html',
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    }),
    new ModuleFederationPlugin({
      name: 'host',
      filename: 'remoteEntry.js',
      remotes: {
        "@carvana/showroom": "host@https://mfe-showroom-hackathon.netlify.app/remoteEntry.js",
        "mf-button": "showroom_button@https://showroom-button.netlify.app/remoteEntry.js",
        "mf-form": "showroom_form@https://showroom-form.netlify.app/remoteEntry.js",
        "mf-input": "showroom_input@https://showroom-input.netlify.app/remoteEntry.js",

        // "@carvana/showroom": "host@http://localhost:3000/remoteEntry.js",
        // "mf-button": "showroom_button@http://localhost:3001/remoteEntry.js",
        // 'mf-form': 'showroom_form@http://localhost:3002/remoteEntry.js',
        // "mf-input": "showroom_input@http://localhost:3003/remoteEntry.js",
      },
      exposes: {
        './components': './lib/index.js'
      },
      shared: require('./package.json').dependencies
      // shared
    })
  ]
};
