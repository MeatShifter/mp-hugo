import merge from "webpack-merge";
import UglifyJsPlugin from "uglifyjs-webpack-plugin";
import OptimizeCSSAssetsPlugin from "optimize-css-assets-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

import common from "./webpack.common.js";

export default merge(common, {
  mode: "production",

  output: {
    filename: "[name].[hash:5].js",
    chunkFilename: "[id].[hash:5].css"
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true
      }),

      new MiniCssExtractPlugin({
        filename: "[name].[hash:5].css",
        chunkFilename: "[id].[hash:5].css"
      }),

      new OptimizeCSSAssetsPlugin({})
    ]
  }
});
