const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  new MiniCssExtractPlugin({filename: 'style.css'}),
];
