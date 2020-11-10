const HTMLWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const LinkTypePlugin = require("html-webpack-link-type-plugin")
  .HtmlWebpackLinkTypePlugin;

module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader" // creates style nodes from JS strings
          },
          {
            loader: "css-loader" // translates CSS into CommonJS
          },
          {
            loader: "sass-loader" // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  },
  plugins: [
    new HTMLWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new LinkTypePlugin({
      "*.css": "text/css",
      "*.js": "text/javascript"
    }),
    new MiniCssExtractPlugin()
  ]
};
