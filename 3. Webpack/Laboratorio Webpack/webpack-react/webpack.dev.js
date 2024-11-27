import { merge } from "webpack-merge";
import common from "./webpack.common.js";
import Dontenv from "dotenv-webpack";

export default merge(common, {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: {
                exportLocalsConvention: "camelCase",
                localIdentName: "[path][name]__[local]--[hash:base64:5]",
              },
            },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
      // Add this rule to load CSS from node_modules for bopstrap
      {
        test: /\.css$/,
        include: /node_modules/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },

  //Development mode in the browser
  devtool: "source-map",

  devServer: {
    port: 3000,
    hot: true,
    devMiddleware: {
      stats: "errors-only",
    },
  },

  plugins: [
    new Dontenv({
      path: "./dev.env",
    }),
  ],
});
