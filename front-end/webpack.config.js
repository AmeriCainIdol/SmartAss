// const webpack = require('webpack');
const path = require('path');

const DIST_DIR = path.resolve(__dirname, '/front-end/dist');
const SRC_DIR = path.resolve(__dirname, '/front-end/src');

const config = {
  entry: `${SRC_DIR}/components/index.jsx`,
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app'
  },
  modules: {
    loaders: [{
      test: /\.jsx?/,
      include: SRC_DIR,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-2']
      }
    }]
  }
};

module.exports = config;