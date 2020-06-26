const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  output: {
    filename: "app.bundle.js",
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new MiniCssExtractPlugin({
      // filename: true ? "[name].css" : "[name].[hash].css",
      // chunkFilename: true ? "[id].css" : "[id].[hash].css",
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
        test: /\.css$/,
        exclude: /node_modules/,
        loaders: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.scss$/,
        loader: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(jpg|png|gif|woff|eot|ttf|svg)/,
         use: {
             loader: 'file-loader', // this need file-loader
             options: {
                 limit: 50000,
                 outputPath: './src/statics/' 

             }
         }
    }
    ],
  },
};
