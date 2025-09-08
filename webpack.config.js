
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js', // Your main JS file
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Clears the dist folder before each build
  },
  module: {
    rules: [
      {
        test: /\.css$/i,          // For importing CSS
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i, // If  import images in JS
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Uses your HTML file as template
    }),
  ],
  devServer: {
    static: './dist',  // Serve content from dist
    hot: true,
    open: true,        // Opens browser automatically
  },
  mode: 'development',
};
