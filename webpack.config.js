const path = require('path');

module.exports = {
  entry: './frontend/bandvamp.jsx',
  output: {
    path: path.resolve(__dirname, 'app', 'assets', 'javascripts'),
    filename: 'bundle.js'
  },
  
  module: {
    rules: [{
      test: [/\.jsx?$/],
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['@babel/env', '@babel/react']
      }
    },
    {
      test: /\.(png|jpg|gif)$/i,
      use: [
        {
          loader: 'url-loader',
          options: {
            limit: 8192,
          },
        },
      ],
    },
    {
      test: /\.mp3$/,
      loader: 'file-loader'
    }]
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '*'],
  }
};
