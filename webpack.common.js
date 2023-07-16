const path = require("path");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
var {ProvidePlugin} = require('webpack');



module.exports = {
  entry: {
    main: "./src/index.tsx",
    // lib: "./src/lib.js", //need to fix if multiple entry needed
  },
  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js"],
    //also add alias for requirejs like config
    alias:{
      "jsLib":path.resolve(__dirname,'src','lib.js')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|ts)x?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
        }],
      },
      {
        test: /index\.tsx$/,
        use: [{
          loader: "imports-loader",
          options: {
            type: "module",
            imports: ["default jsLib importVar"],
          },
        },],
      },
      {
        test: /lib.js$/,
        use: [{
          loader: "exports-loader",
          options: {
            type: "module",
            exports: ["default exportVar"],
          },
        },],
      },
      {
        test: /\.html$/, //import assets
        use: ["html-loader"],
      },
      {
        test: /\.(png|jpg|gif|svg|eot|jpeg|ttf|woff)$/, //file-loader not needed from webpack 5
        type: "asset/resource",
      },
    
    ],
  },

optimization: {
  runtimeChunk: 'single',//hack needed to run HMR with dev-server multi-entries
  splitChunks: {
      cacheGroups: {
          vendor: {
              test: /[\\/]node_modules[\\/]/,
              name: 'vendors',
              enforce: true,
              chunks: 'all'
          }
      }
  }
},
  plugins: [new CleanWebpackPlugin(), new htmlWebpackPlugin({ template: "./public/index.html" }),new BundleAnalyzerPlugin({analyzerMode:process.env.ANALYZE || 'disabled' }),
  new ProvidePlugin({
    'React':     'react',
    'ReactDOM':   'react-dom',
  })],
};

//todo
//react-refresh
//eslintrc
//prettier
//husky & lint-staged
//babel-runtime
