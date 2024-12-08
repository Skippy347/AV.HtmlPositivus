import { BuildOptions } from "./types/configuration";

import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import path from "path";
import webpack from "webpack";

export function buildPlugins(options: BuildOptions): webpack.WebpackPluginInstance[] {
  const { paths } = options;

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.publicFolder, "favicon.ico"),
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),
  ];
}
