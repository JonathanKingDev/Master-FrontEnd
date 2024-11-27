import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import url from "url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

export default {
  //Context for the entry point of the application (src/name.js)
  context: path.resolve(__dirname, "src"),

  entry: {
    app: "./index.tsx",
  },

  //Resolve import/export extensions
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },

  output: {
    filename: "[name].[chunkhash].js",
    clean: true,
  },

  module: {
    //Loaders
    rules: [
      {
        test: /\.(j|t)sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.(png|jpg|gif|svg|webp)$/,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext]",
        },
      },
      {
        test: /\.html$/,
        loader: "html-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      filename: "index.html",
      scriptLoading: "blocking",
    }),
  ],
};
