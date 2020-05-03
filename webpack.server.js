const path = require("path");
const nodeExternals = require("webpack-node-externals");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const config = {
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
};

module.exports = merge(baseConfig, config);
