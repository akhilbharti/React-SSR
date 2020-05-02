const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
  //  building a bundle
  // for nodeJS, rather than for the browser
  target: "node",
  externals: [nodeExternals()],

  //  root file of our
  // server application
  entry: "./src/index.js",

  //  the output file
  // that is generated
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },

  //  run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: [
            "react",
            "stage-0",
            ["env", { targets: { browsers: ["last 2 versions"] } }],
          ],
        },
      },
    ],
  },
};
