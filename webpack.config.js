const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index_bundle.js",
    publicPath: "/",
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.(t|j)sx?$/,
        use: { loader: "awesome-typescript-loader" },
      },
      {
        enforce: "pre",
        test: /\.js$/,
        loader: "source-map-loader",
      },
      {
        test: /\.html$/,
        use: [{ loader: "html-loader" }],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
  ],
};
