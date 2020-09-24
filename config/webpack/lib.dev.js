// Constants & Configs
const config = require('../');
const name = require('../../package.json').name;
const plugins = require('./_plugins');
const rules = require('./_rules.dev');
const resolve = require('./_resolve');

// Main Config for Lib & Docs Development
module.exports = {
  mode: 'development',
  resolve,

  entry: './src/index.jsx',

  output: {
    path: config.lib.output,
    filename: 'index.js',
    libraryTarget: 'commonjs2',
    library: name,
  },

  module: {
    rules,
  },

  plugins,
};
