var path = require("path");

module.exports = {
  context: __dirname,
  entry: "./javascripts/catfish_entry.js",
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: [/\.jsx?$/, /\.js?$/],
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    extensions: [".js", ".jsx", "*"],
  },
};
