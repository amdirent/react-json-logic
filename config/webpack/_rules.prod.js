const config = require('../');

module.exports = [
  {
    test: /\.jsx?$/,
    loader: "babel-loader",
  },
  {
    test: /\.css?$/,
    loader: "css-loader",
  },
  {
    test: /\.s[ac]ss$/i,
    use: [
      // Creates `style` nodes from JS strings
      'style-loader',
      // Translates CSS into CommonJS
      'css-loader',
      // Compiles Sass to CSS
      'sass-loader',
    ],
  }
];
