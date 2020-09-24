// Core
const webpack = require('webpack');

// Constants & Configs
const config = require('../');
const plugins = require('./_plugins');
const rules = require('./_rules.dev');
const resolve = require('./_resolve');
const htmlPlugin = require('./_htmlPlugin');

// Main Config for Lib & Docs Development
module.exports = {
  mode: 'development',
  resolve,

  entry: {
    app: [
      `webpack-dev-server/client?http://${config.host}:${config.port}`,
      'babel-polyfill',
      './examples/index.jsx',
    ],
  },

  output: {
    path: config.docs.output,
    filename: 'index.js',
    publicPath: '/',
  },

  module: {
    rules,
  },

  plugins: plugins.concat(
    htmlPlugin,
  ),
};
