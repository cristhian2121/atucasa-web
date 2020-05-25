const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  output: {
    filename: "app.bundle.js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: true ? "[name].css" : "[name].[hash].css",
      chunkFilename: true ? "[id].css" : "[id].[hash].css",
      // filename: devMode ? "[name].css" : "[name].[hash].css",
      // chunkFilename: devMode ? "[id].css" : "[id].[hash].css",
    }),
  ],
  module: {
    rules: [
      // Babel rule
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      }, //rule Sass
      {
        test: /\.(scss|sass|css)$/,
        exclude: /node_modules/,
        loaders: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              modules: true,
              sourceMap: true,
              importLoaders: 1,
              localIdentName: "[local]___[hash:base64:5]",
            },
          },
          "sass-loader",
        ],
      },
    ],
  },
};
