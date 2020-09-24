// Constants & Configs
const config = require('../');
const plugins = require('./_plugins');
const rules = require('./_rules.prod');
const resolve = require('./_resolve');
const htmlPlugin = require('./_htmlPlugin');

// Main Config for Lib & Docs Development
module.exports = {
  mode: 'production',
  devtool: false,
  resolve,

  entry: {
    app: [
      './examples/index.jsx',
    ],
    vendor: [
      'babel-polyfill',
      'react',
      'react-dom',
    ],
  },

  output: {
    path: config.docs.output,
    filename: '[name].[hash].js',
    publicPath: './',
  },

  module: {
    rules
  },

  plugins: plugins.concat(
    htmlPlugin,
  ),
};
