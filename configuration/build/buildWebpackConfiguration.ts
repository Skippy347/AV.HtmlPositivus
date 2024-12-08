import { BuildOptions } from "./types/configuration";

import { buildDevelopmentServer } from "./buildDevelopmentServer";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";

import webpack from "webpack";

export function buildWebpackConfiguration(options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDevelopment } = options;

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDevelopment ? "inline-source-map" : undefined,
    devServer: isDevelopment ? buildDevelopmentServer(options) : undefined,
  };
}
