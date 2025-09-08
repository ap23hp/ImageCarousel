const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js", // Your JS entry
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
       test: /\.(png|svg|jpg|jpeg|gif|avif)$/i,
  type: "asset/resource",
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html", // <-- Correct path to HTML
    }),
  ],
  devServer: {
    static: "./dist",
    hot: true,
    open: true,
  },
  mode: "development",
};
