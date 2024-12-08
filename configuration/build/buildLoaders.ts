import { BuildOptions } from "./types/configuration";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const { isDevelopment } = options;

  const typescriptLoader: webpack.RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const cssLoader: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDevelopment ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            namedExport: false,
            exportLocalsConvention: "as-is",
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: isDevelopment ? "[path][name]__[local]--[hash:base64:5]" : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const svgLoader: webpack.RuleSetRule = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fontLoader: webpack.RuleSetRule = {
    test: /\.woff2$/i,
    type: "asset/resource",
    generator: {
      filename: "fonts/[name].[hash:8][ext]",
    },
  };

  const imageLoader: webpack.RuleSetRule = {
    test: /\.(png|jpe?g|gif|ico)$/i,
    type: "asset/resource",
    generator: {
      filename: "images/[name].[hash:8][ext]",
    },
  };

  return [typescriptLoader, cssLoader, svgLoader, fontLoader, imageLoader];
}
