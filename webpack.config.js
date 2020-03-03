'use strict';

const CONFIG = {
  entry: './serverManager/client/src/index.js',
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react'],
            plugins: ['@babel/syntax-dynamic-import', 'transform-class-properties'],
          },
        }
      }, {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
      }, {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              publicPath: 'built'
            },
          },
        ],
      }
    ]
  }
}

module.exports = CONFIG;