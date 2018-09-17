const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'front-end/src');
const DIST_DIR = path.resolve(__dirname, 'front-end/dist');

const config = {
  entry: `${SRC_DIR}/index.jsx`,
  output: {
    filename: 'bundle.js',
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ],
    loaders: [
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=25000'
      }
    ] 
  },
  node: {
    net: 'empty',
    tls: 'empty',
    fs: 'empty'
  }
};

module.exports = config;