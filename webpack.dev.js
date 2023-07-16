const path = require("path");
const commonConfig = require("./webpack.common");
const { merge: mergeWebpack } = require("webpack-merge");
const { WebpackManifestPlugin } = require('webpack-manifest-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const  webpack  = require("webpack");
const chokidar = require('chokidar');

class WatchExternalFilesPlugin  {
  apply(compiler) {
    compiler.hooks.done.tap('after-compile', (compilation, callback) => {
      // ['./src/a.js'].forEach(path => compilation.contextDependencies.add(path));
      // callback();
    });
  };
};


module.exports =(env) => mergeWebpack(commonConfig, {
  mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    port: env.port,
    // watchContentBase: true,
    devMiddleware: {
      writeToDisk: true
    },
    // watchFiles:['public/deep/a.js'],
    static:['public'],
    // hot:false,g
    historyApiFallback: true,
  },
  output: {
    filename: "[name].js",
    assetModuleFilename: "includedAssets/[name][ext]",
    path: path.resolve(__dirname, "dist"),
    publicPath:''
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "style-loader", //3.Injects css into dom by js
          "css-loader", //2.Turns css into commonjs
          "sass-loader", //1.Sass->css
        ],
      },
      {
        test: /\.[jt]sx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: require.resolve('babel-loader'),
            options: {
              plugins: [require.resolve('react-refresh/babel')],
            },
          },
        ],
      }
    ],
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new ReactRefreshWebpackPlugin(),
    // new WebpackManifestPlugin({ fileName: 'manifest.json'})
    // new WatchExternalFilesPlugin()
  ]
});
