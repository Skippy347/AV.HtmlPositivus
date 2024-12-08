import { BuildOptions } from "./types/configuration";

import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDevelopment } = options;

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            exportLocalsConvention: "as-is",
            auto: (resPath: string) => Boolean(resPath.includes(".module.")),
            localIdentName: isDevelopment ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const svgrLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const assetModulesLoader = {
    test: /\.(png|jpe?g|ico)$/,
    type: "asset/resource",
  };

  return [typescriptLoader, cssLoader, svgrLoader, assetModulesLoader];
}
