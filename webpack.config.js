const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const WebpackShellPluginNext = require("webpack-shell-plugin-next")

module.exports = {
  devtool: "inline-source-map",
  entry: {
    main: "./src/index.ts"
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "[name]-bundle.js"
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {from: "public"}
      ]
    }),
    new WebpackShellPluginNext({
      onBuildEnd: {
        scripts: ["npm run serve:dev"]
      }
    })
  ],
}